import { NextRequest, NextResponse } from "next/server";
import { routes } from "./routes";

export default function middleware(req: NextRequest) {
  let { pathname } = req.nextUrl;
  const token = req.cookies.get("awabah_tkn");
  const isProtected = [...routes].find((route) => route.path === pathname);

  if (isProtected && !token) {
    const url = req.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
