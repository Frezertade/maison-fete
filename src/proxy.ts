import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "lancasterdecorators.com";

/** Production Vercel alias that still serves the live site with index,follow. */
const PRODUCTION_VERCEL_HOSTS = new Set([
  "maison-fete.vercel.app",
  "www.maison-fete.vercel.app",
]);

/**
 * Keep Google/Bing on the apex domain. The production *.vercel.app alias used
 * to serve the same pages with index,follow — that creates alternate crawl
 * targets. Preview deployments (maison-fete-git-*.vercel.app) are left alone.
 *
 * Next.js 16 deprecates middleware.ts in favor of proxy.ts (Node runtime).
 */
export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") || "").split(":")[0].toLowerCase();

  if (PRODUCTION_VERCEL_HOSTS.has(host) || host === `www.${CANONICAL_HOST}`) {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = CANONICAL_HOST;
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|mp4)$).*)",
  ],
};
