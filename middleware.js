import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const protectedRoutes = ["/order-history", "/payment"];

  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}