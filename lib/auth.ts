// /lib/auth.ts

import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/prisma/prisma";
import GoogleProvider from "next-auth/providers/google";
import { emailTemplate } from "@/components/EmailTemplate";
import { Resend } from 'resend';
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const resend = new Resend(process.env.RESEND_API_KEY);
const google_client_id = process.env.GOOGLE_CLIENT_ID;
const google_client_secret = process.env.GOOGLE_CLIENT_SECRET;
if(!google_client_id || !google_client_secret){
  throw new Error("Google client secrets not found");
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
      clientId: google_client_id,
      clientSecret: google_client_secret,
    }),
    {
      id: "resend",
      type: "email",
      from: process.env.EMAIL_FROM,
      server: {}, // This is required but not used
      maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
      name: "Email", // Add this line
      sendVerificationRequest: async ({ identifier: email, url }) => {
        try {
          const result = await resend.emails.send({
            from: process.env.EMAIL_FROM!,
            to: email,
            subject: 'Sign in to Your App',
            html: emailTemplate({ url }),
          });
          console.log('Verification email sent:', result);
        } catch (error) {
          console.error('Error sending verification email:', error);
          throw new Error('Failed to send verification email');
        }
      },
    },
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: { email: credentials.email as string }
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
          name: user.name,
          role: user.role,
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.role = token.role as string;
      }
      return session;
    },
  },
});