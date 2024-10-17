// app/api/auth/signin/google/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { signIn } from "next-auth/react";

export async function POST(request: NextRequest) {
  try {
    console.log("Starting Google sign-in process");

    // Initiate the Google sign-in process
    const result = await signIn("google", { 
      redirect: false,
      callbackUrl: '/dashboard'
    });

    console.log("Google sign-in result:", result);

    if (result?.error) {
      return NextResponse.json({ success: false, error: result.error }, { status: 400 });
    }

    if (result?.ok) {
      return NextResponse.json({ success: true, url: result.url }, { status: 200 });
    }

    return NextResponse.json({ success: false, error: "An unexpected error occurred" }, { status: 500 });
  } catch (error) {
    console.error("Google sign-in error:", error);
    return NextResponse.json({ success: false, error: "Failed to sign in with Google" }, { status: 500 });
  }
}