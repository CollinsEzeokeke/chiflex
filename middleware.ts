// /middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from './lib/auth';

export async function middleware(request: NextRequest) {
  const session = await auth();

  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Check for admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Use optional chaining and provide a default value
    if (session.user?.role !== 'ADMIN') {
      return NextResponse.redirect(new URL('/unauthorized', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/user-dashboard'],
}