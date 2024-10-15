// /lib/auth.ts

import NextAuth, { Session } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/prisma/prisma";
import GoogleProvider from "next-auth/providers/google";
import { Resend } from "resend";
import { User, UserRole } from "@prisma/client";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { UserId } from "@/types/next-auth";

const resend = new Resend(process.env.RESEND_API_KEY);
function getClient() {
  const google_client_id = process.env.GOOGLE_CLIENT_ID;
  const google_client_secret = process.env.GOOGLE_CLIENT_SECRET;
  if (!google_client_id || !google_client_secret) {
    throw new Error("Google client secrets not found");
  }
  return { google_client_id, google_client_secret };
}
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    signOut: "/logout",
  },
  providers: [
    GoogleProvider({
      clientId: getClient().google_client_id,
      clientSecret: getClient().google_client_secret,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });
        if (!user || !user.password) {
          return null;
        }
        const isPasswordValid = await bcrypt.compare(
          credentials.password as string,
          user.password
        );
        if (!isPasswordValid) {
          return null;
        }
        return {
          id: user.id,
          email: user.email,
          image: user.image,
          name: user.name,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account && account.provider === "google") {
        // Store Google profile data for later use
        sessionStorage.setItem("googleProfile", JSON.stringify(profile));
        return true;
      }
      return false;
    },

    async jwt({ token, user }): Promise<JWT> {
      console.log(token.id);
      if (user) {
        // This is only called on initial sign in
        const prismaUser = user as User;
        token.id = prismaUser.id;
        token.role = prismaUser.role;
      }

      // On subsequent calls, token exists, but we need to check the database
      const dbUser = await prisma.user.findUnique({
        where: { email: token.email as string },
        select: { id: true, name: true, email: true, image: true, role: true },
      });

      if (!dbUser) {
        // If user not found in the database, return the original token
        return token;
      }

      // Update the token with the latest user information
      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        image: dbUser.image,
        role: dbUser.role as UserRole,
      };
    },

    async session({ session, token }: { session: Session; token: any }) {
      if (token && session.user) {
        session.user.id = token.id as UserId;
      }
      return session;
    },
    redirect() {
      return "/dashboard";
    },
  },
});
