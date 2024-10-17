// lib/emailService.ts

import { Resend } from "resend";
import { render } from "@react-email/render";
import { VerificationEmail } from "../components/VerificationEmail";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(email: string, token: string) {
  const verificationUrl = `${process.env.NEXTAUTH_URL}/auth/verify?token=${token}`;

  // Await the render function
  const emailHtml = await render(
    React.createElement(VerificationEmail, { verificationUrl })
  );

  await resend.emails.send({
    from: "Your App <noreply@yourapp.com>",
    to: email,
    subject: "Verify your email",
    html: emailHtml, // Now emailHtml is a string, not a Promise
  });
}
