// Configurations necessary for enabling :

// 1. Email and Password Authentication done
// 2. Email Verification
// 3. Email Url
// 4. Google Authentication
// 5. Admin privileges

import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/prisma/prisma";
import SendEmail from "@/providers/emailProvider";
import { admin, username } from "better-auth/plugins";


export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  cookie: {
    secure: true,
    sameSite: 'lax',
    domain: process.env.NODE_ENV === 'production' ? '.vercel.app' : undefined
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async (user, url) => {
      await SendEmail({
        to: user.email,
        subject: "Reset your password",
        text: url,
      });
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    sendVerificationEmail: async (user, url, _token) => {
      await SendEmail({
        to: user.email,
        subject: "Verify your email address",
        text: url,
      });
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 1 day (every 1 day the session expiration is updated)
    cookieCache: {
      enabled: true,
      maxAge: 60 * 15 // 15 minutes cache duration
  }
  },

  plugins: [
    admin({ defaultRole: "BASIC_USER" }),
    username()
  ],
});
