// /lib/auth.ts

import NextAuth, { Session } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/prisma/prisma";
import GoogleProvider from "next-auth/providers/google";
import { User, UserRole } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

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
    signIn: "/auth/signin",
    verifyRequest: "/auth/verify-request",
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
          throw new Error("Email and password are required");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string },
        });

        if (!user || !user.password) {
          throw new Error("User not found");
        }

        const isPasswordValid = await compare(
          credentials.password as string,
          user.password
        );

        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }

        return user;
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
    async jwt({ token, user, trigger }) {
      const prismaUser = user as User;
      if (user) {
        // This is only called on initial sign in
        token.id = prismaUser.id;
        token.role = prismaUser.role;
      }

      // Only check the database when necessary
      if (trigger === "update" || (trigger === "signIn" && !user)) {
        const dbUser = await prisma.user.findUnique({
          where: { email: token.email as string },
          select: { id: true, role: true },
        });

        if (dbUser) {
          token.id = dbUser.id;
          token.role = dbUser.role;
        }
      }

      return token;
    },
    async session({ session, token, trigger }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as UserRole;
      }
      return session;
    },
    redirect() {
      return "/dashboard";
    },
  },
});
