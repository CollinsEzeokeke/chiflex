import { authClient } from "@/lib/auth-Client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        await authClient.signOut();

        // clearing auth-cookies
        const response = NextResponse.json(
            { success: true },
            { status: 200 }
          )
          
          // Remove the auth cookie
          response.cookies.delete('auth-token') // adjust cookie name as needed
          
          return response
    } catch (error) {
        return NextResponse.json(
          { success: false, error: 'Failed to sign out' },
          { status: 500 }
        )
      }
}