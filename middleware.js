import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    console.log(req.nextUrl.pathname);
    console.log(req.nextauth.token.user.role);

    if (
      req.nextUrl.pathname.startsWith("/dashboard") &&
      req.nextauth.token.user.role != "admin"
    ) {
        console.log("rtun")
      return NextResponse.redirect(new URL("/denied", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/dashboard", "/profile"] };
