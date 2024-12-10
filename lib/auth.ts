import { betterAuth, User } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import SendEmail from '@/lib/emailVerification'
import { passkey, username } from "better-auth/plugins";

const prisma = new PrismaClient();
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
        sendResetPassword: async ({ user, url }) => {
            await SendEmail({
                to: user.email,
                subject: 'Reset your password',
                text: url
            })
        },
    },
    emailVerification: {
        autoSignInAfterVerification: true,
        sendOnSignUp: true,
        sendVerificationEmail: async (data: {user:User, url:string}) => {
            await SendEmail({
                to: data.user.email,
                subject: "Verify your email address",
                text: data.url,
            });
        },

        verificationMaxAge: 24 * 60 * 60,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
    },
    session: {
        cookieCache: {
            enabled: true,
            maxAge: 14 * 60 // Cache duration in seconds
        }
    },
    plugins: [passkey(),username()]
});