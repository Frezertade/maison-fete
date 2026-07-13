import type { Metadata } from "next";
import { Cormorant_Garamond, Figtree } from "next/font/google";
import "./globals.css";

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
    default: "Maison Fête | Luxury Event Décor in Lancaster, PA",
    template: "%s | Maison Fête",
  },
  description:
    "Full-service event decoration for weddings, birthdays, baby showers, graduations, and celebrations in Lancaster, PA. Florals, balloons, tablescapes, and complete room styling.",
  keywords: [
    "event decor Lancaster PA",
    "wedding decoration Lancaster",
    "birthday party decorator",
    "baby shower decorations",
    "graduation party decor",
    "event styling Lancaster County",
  ],
  openGraph: {
    title: "Maison Fête | Luxury Event Décor in Lancaster, PA",
    description:
      "Design-led décor for unforgettable celebrations across Lancaster County.",
    type: "website",
    locale: "en_US",
    siteName: "Maison Fête",
    images: [
      {
        url: "/images/logo/monogram-dark.jpg",
        width: 1024,
        height: 1024,
        alt: "Maison Fête logo",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
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
      <body className="grain min-h-full flex flex-col font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
