// app/api/auth/signin/credentials/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { signIn } from "next-auth/react";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ success: false, error: "Email and password are required" }, { status: 400 });
    }

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    console.log("This is the result from the credentials", result);

    if (result?.error) {
      return NextResponse.json({ success: false, error: result.error }, { status: 401 });
    }

    if (result?.ok) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    return NextResponse.json({ success: false, error: "An unexpected error occurred" }, { status: 500 });
  } catch (error) {
    console.error("Sign-in error:", error);
    return NextResponse.json({ success: false, error: "An unexpected error occurred" }, { status: 500 });
  }
}