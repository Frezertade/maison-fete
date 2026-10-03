import type { Metadata } from "next";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

// Search engine ownership verification via meta tags (optional).
// Set GOOGLE_SITE_VERIFICATION / BING_SITE_VERIFICATION in Vercel (Production)
// and redeploy. Not needed if verifying via DNS TXT records instead.
const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();
const bingVerification = process.env.BING_SITE_VERIFICATION?.trim();
const verification: Metadata["verification"] | undefined =
  googleVerification || bingVerification
    ? {
        ...(googleVerification ? { google: googleVerification } : {}),
        ...(bingVerification ? { other: { "msvalidate.01": bingVerification } } : {}),
      }
    : undefined;

export const metadata: Metadata = {
  title: {
    default: "Lancaster PA Home & Event Décor | Free Quotes | Lancaster Decorators",
    template: "%s | Lancaster Decorators",
  },
  description:
    "Get matched with vetted Lancaster County décor pros for interior styling, holiday décor, home staging, weddings, and parties. Free, no-obligation quotes.",
  keywords: [
    "interior decorator Lancaster PA",
    "home decor Lancaster PA",
    "interior design Lancaster PA",
    "holiday decorating service Lancaster",
    "home staging Lancaster PA",
    "event decor Lancaster PA",
    "wedding decorator Lancaster County",
    "balloon decorations Lancaster PA",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Lancaster PA Home & Event Décor — Free Quotes from Local Pros",
    description:
      "Interior styling, holiday décor, home staging, weddings & parties across Lancaster County. One request, matched with vetted local decorators.",
    url: "/",
    type: "website",
    locale: "en_US",
    siteName: "Lancaster Decorators",
    images: [
      {
        url: "/images/hero-wedding.jpg",
        width: 1280,
        height: 720,
        alt: "Elegant champagne and ivory tablescape styled by a Lancaster décor pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lancaster PA Home & Event Décor — Free Quotes",
    description:
      "Get matched with vetted Lancaster County décor and interior styling pros.",
    images: ["/images/hero-wedding.jpg"],
  },
  robots: { index: true, follow: true },
  // Icons come from the file conventions: src/app/icon.svg (LD monogram),
  // src/app/apple-icon.tsx (generated PNG) and src/app/favicon.ico/route.ts.
  ...(verification ? { verification } : {}),
  metadataBase: new URL(SITE_URL),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${figtree.variable} h-full antialiased`}
    >
      <body className="grain min-h-full flex flex-col pb-20 font-sans text-foreground lg:pb-0">
        {children}
      </body>
    </html>
  );
}
