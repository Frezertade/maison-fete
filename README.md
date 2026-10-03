# Lancaster Decorators

Lead-gen referral site for home & event décor in Lancaster County, PA
(https://lancasterdecorators.com). Visitors submit one request and are matched
with independent local décor pros.

## Stack

- **Next.js 16** (App Router), **React 19**, **Tailwind CSS 4**, **TypeScript**
- Photography & short video assets in `/public`

## Pages

| Path | Content source |
| --- | --- |
| `/` | `src/app/page.tsx` + `src/components/*` |
| `/interior-decorating`, `/home-staging`, `/holiday-decorating`, `/event-decor`, `/balloon-decor` | `src/lib/service-pages.ts` (rendered by `src/components/page/ServicePageView.tsx`) |
| `/service-area` | `src/lib/towns.ts` |
| `/blog`, `/blog/[slug]` | `src/lib/blog.ts` |

Every inner page has a unique title/description, canonical URL, Open Graph and
Twitter tags (`pageMetadata` in `src/lib/seo.ts`), BreadcrumbList JSON-LD, a FAQ
section with FAQPage JSON-LD, and the lead form (`#contact`). `sitemap.xml` is
generated from the same data.

Content rules: no invented stats, prices, reviews or credentials. Cost figures
must cite a public source (see `SOURCES` in `src/lib/service-pages.ts`);
otherwise say "varies; request a free quote".

## Icons

`src/app/icon.svg` (LD monogram), `src/app/apple-icon.tsx` and
`src/app/favicon.ico/route.ts` (PNG generated with `next/og`).

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin (defaults to `https://lancasterdecorators.com`) |
| `GOOGLE_SITE_VERIFICATION` | Optional. Google Search Console HTML-tag token → `<meta name="google-site-verification">` |
| `BING_SITE_VERIFICATION` | Optional. Bing Webmaster token → `<meta name="msvalidate.01">` |
| `LEAD_WEBHOOK_URL`, `RESEND_API_KEY`, `LEAD_NOTIFY_EMAIL`, `LEAD_FROM_EMAIL` | Optional lead delivery (see `src/app/api/lead/route.ts`) |

Verification tokens are read at build time, so redeploy after setting them.
If you verify with DNS TXT records instead, leave them unset.

## Develop

```bash
npm install
npm run dev
```
