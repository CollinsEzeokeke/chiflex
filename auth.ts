// Configurations necessary for enabling :

// 1. Email and Password Authentication done
// 2. Email Verification
// 3. Email Url
// 4. Google Authentication
// 5. Admin privileges

import { betterAuth, User } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/prisma/prisma";
import SendEmail from "@/providers/emailProvider";
import { admin } from "better-auth/plugins";


export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async (user: User, url: string) => {
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

  plugins: [admin()],
});
