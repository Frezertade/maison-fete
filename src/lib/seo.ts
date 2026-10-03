import type { Metadata } from "next";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://lancasterdecorators.com"
).replace(/\/$/, "");

export const SITE_NAME = "Lancaster Decorators";

export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;

type PageMetaInput = {
  /** Used for <title> (template appends " | Lancaster Decorators"). */
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

/** Per-page metadata: unique title/description, canonical, Open Graph and Twitter. */
export function pageMetadata({
  title,
  description,
  path,
  image = "/images/hero-wedding.jpg",
  imageAlt,
  type = "website",
  publishedTime,
  modifiedTime,
}: PageMetaInput): Metadata {
  const ogTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      type,
      ...(type === "article" ? { publishedTime, modifiedTime } : {}),
      images: [
        {
          url: image,
          width: 1280,
          height: 720,
          alt: imageAlt || title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: [image],
    },
  };
}

export type Faq = { q: string; a: string };

export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const BUSINESS_ID = `${SITE_URL}/#business`;
