// // middleware.ts

// import { NextResponse, NextRequest } from "next/server";
// import { getToken } from "next-auth/jwt";

// export async function middleware(request: NextRequest) {
//   const token = await getToken({ req: request });

//   if (!token) {
//     return NextResponse.redirect(new URL("/auth/signin", request.url));
//   }

//   const role = token.role as string;

//   if (
//     request.nextUrl.pathname.startsWith("/dashboard/user") &&
//     role !== "USER"
//   ) {
//     return NextResponse.redirect(new URL("/unauthorized", request.url));
//   }

//   if (
//     request.nextUrl.pathname.startsWith("/dashboard/company") &&
//     role !== "COMPANY"
//   ) {
//     return NextResponse.redirect(new URL("/unauthorized", request.url));
//   }

//   if (
//     request.nextUrl.pathname.startsWith("/dashboard/admin") &&
//     role !== "SUPER_ADMIN"
//   ) {
//     return NextResponse.redirect(new URL("/unauthorized", request.url));
//   }

//   return NextResponse.next();
// }



// export const config = {
//   matcher: ["/dashboard/:path*"],
// };



// export { auth as middleware } from "./lib/auth"