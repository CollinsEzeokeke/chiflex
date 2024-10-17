// app/api/complete-signup/route.ts
import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import prisma from "@/prisma/prisma";
import { UserRole } from "@prisma/client";

export async function POST(req: NextRequest) {
  const session = await auth();

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { userRole, googleProfile } = body;

  if (!userRole || !googleProfile) {
    return NextResponse.json({ error: "Missing user data" }, { status: 400 });
  }

  try {
    // Validate userRole
    if (!Object.values(UserRole).includes(userRole as UserRole)) {
      return NextResponse.json({ error: "Invalid user role" }, { status: 400 });
    }

    const user = await prisma.user.create({
      data: {
        name: googleProfile.name,
        email: googleProfile.email,
        image: googleProfile.image,
        role: userRole as UserRole,
      },
    });

    return NextResponse.json(
      { message: "User created successfully", user },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}
