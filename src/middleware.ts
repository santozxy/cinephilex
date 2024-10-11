import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const session = request.cookies.get("tmdb_session_id");

  const loginURL = new URL("/login", request.nextUrl);
  const dashboardURL = new URL("/home", request.nextUrl);
  if (
    !session &&
    request.nextUrl.pathname !== "/login" &&
    request.nextUrl.pathname !== "/"
  ) {
    return NextResponse.redirect(loginURL);
  }
  if (session && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(dashboardURL);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
