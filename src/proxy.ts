import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Locale routing without a visible /el prefix:
 *  - "/"            → internally rewritten to "/el"           (URL stays "/")
 *  - "/services"    → internally rewritten to "/el/services"
 *  - "/en/..."      → served as-is
 *  - "/el/..."      → 301 redirect to the unprefixed path (no public /el route)
 */
export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Never touch internals, API routes or static files.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // /el must not exist publicly — redirect to the root equivalent.
  if (pathname === "/el" || pathname.startsWith("/el/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.replace(/^\/el/, "") || "/";
    return NextResponse.redirect(url, 301);
  }

  // English is served under /en as-is.
  if (pathname === "/en" || pathname.startsWith("/en/")) {
    return NextResponse.next();
  }

  // Everything else is Greek at the root — rewrite internally to /el.
  const url = request.nextUrl.clone();
  url.pathname = `/el${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
