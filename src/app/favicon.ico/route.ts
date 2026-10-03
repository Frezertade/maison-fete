import { monogramImage } from "@/lib/brand/icon-image";

// Browsers and crawlers request /favicon.ico directly; serve the LD monogram
// (PNG data is accepted at this path by all modern browsers) instead of the old
// Maison Fête icon.
export const dynamic = "force-static";

export function GET() {
  return monogramImage(48);
}
