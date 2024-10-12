import { PrismaAdapter } from "@auth/prisma-adapter"
import { NextAuthOptions } from "next-auth"
import { prisma } from "./prisma"
import EmailProvider from "next-auth/providers/email"
import resend from "./resend"

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: async ({ identifier, url, provider }) => {
        const user = await prisma.user.findUnique({
          where: {
            email: identifier,
          },
          select: {
            emailVerified: true,
          },
        })

        const result = await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: identifier,
          subject: 'Sign in to Your E-commerce Site',
          html: `<p>Click <a href="${url}">here</a> to sign in.</p>`
        })

        // You can add additional logic here, such as:
        if (!user?.emailVerified) {
          await sendWelcomeEmail(identifier)
        }
      },
    }),
  ],
  // Add other NextAuth options as needed
}

async function sendWelcomeEmail(email: string) {
  try {
    const result = await resend.emails.send({
      from: 'Your Store <noreply@yourstore.com>',
      to: email,
      subject: 'Welcome to Our Store!',
      html: `<p>Hello,</p><p>Welcome to our store! We're excited to have you on board.</p>`
    });
    console.log('Welcome email sent:', result);
  } catch (error) {
    console.error('Error sending welcome email:', error);
  }
}