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
  // Prefer PNG monogram so browsers don't stick on the default Next.ico
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon.ico", sizes: "48x48" },
    ],
    shortcut: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
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
