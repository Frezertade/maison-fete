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
    default: "Event & Party Decorations in Lancaster, PA | Lancaster Decorators",
    template: "%s | Lancaster Decorators",
  },
  description:
    "Lancaster Decorators designs and installs event décor in Lancaster, PA: graduation parties, weddings, baby showers, birthdays and church events. Free, no-obligation quotes.",
  keywords: [
    "graduation party decorations Lancaster PA",
    "wedding decor Lancaster PA",
    "baby shower decorations Lancaster PA",
    "party decorations Lancaster PA",
    "church event decorations Lancaster",
    "quinceanera decorations Lancaster PA",
    "balloon arch Lancaster PA",
    "event decorator Lancaster PA",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Event Decorations in Lancaster, PA — Lancaster Decorators",
    description:
      "Event décor designed, set up and taken down for graduation parties, weddings, baby showers, birthdays and church events across Lancaster County.",
    url: "/",
    type: "website",
    locale: "en_US",
    siteName: "Lancaster Decorators",
    images: [
      {
        url: "/images/hero-wedding.jpg",
        width: 1280,
        height: 720,
        alt: "Elegant champagne and ivory event tablescape in Lancaster County",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Decorations in Lancaster, PA — Free Quotes",
    description:
      "Lancaster County event decorator for graduations, weddings, showers, birthdays and church events.",
    images: ["/images/hero-wedding.jpg"],
  },
  robots: { index: true, follow: true },
  // Icons come from the file conventions: src/app/icon.svg (LD monogram),
  // src/app/apple-icon.tsx (generated PNG) and src/app/favicon.ico.
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
