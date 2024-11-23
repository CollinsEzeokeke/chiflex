import { NextResponse } from "next/server";
import { authClient } from "@/lib/auth-Client";
import prisma from "@/prisma/prisma"

export async function POST(req: Request, res: Response) {
  try {
    const { name, email, password, username } = await req.json()

    const existingUser = await prisma.user.findUnique({
      where: {
        email: email
      }
    })
    if (existingUser) {
      return NextResponse.json(
        { error: 'The user already exists' },
        { status: 409 }
      )
    }

    const { data, error } = await authClient.signUp.email({
      email: email,
      password: password,
      name: name,
      username: username,
      image: "https://example.com/image.png",
      callbackURL: "/",
    });
    if (data) {
      return NextResponse.json({ data })
    }
    return NextResponse.json({ error })
  } catch (error) {
    NextResponse.json(
      { message: 'An error Occured', error },
      { status: 500 }
    )
  }
}