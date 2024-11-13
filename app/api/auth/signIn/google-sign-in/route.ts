import { NextResponse, NextRequest } from "next/server";
import { authClient } from "@/lib/auth-Client";

export async function POST(req: Request) {
  try {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
    });
    if (data) {
      return NextResponse.json({ data });
    }
    return NextResponse.json({ error });
  } catch (error) {
    return NextResponse.json(
      { message: "this was an error" + error },
      { status: 400 }
    );
  }
}
