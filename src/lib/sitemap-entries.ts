import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog";
import { absoluteUrl } from "@/lib/seo";
import { servicePages } from "@/lib/service-pages";
import { sitemapLastmod } from "@/lib/sitemap-date";

export function buildSitemap(now = new Date()): MetadataRoute.Sitemap {
  const lastmod = sitemapLastmod(now);
  return [
    { url: absoluteUrl("/"), lastModified: lastmod, changeFrequency: "weekly", priority: 1 },
    ...servicePages.map((p) => ({
      url: absoluteUrl(p.path),
      lastModified: lastmod,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    { url: absoluteUrl("/service-area"), lastModified: lastmod, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/blog"), lastModified: lastmod, changeFrequency: "weekly", priority: 0.6 },
    ...posts.map((p) => ({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: sitemapLastmod(`${p.dateModified}T12:00:00Z`, lastmod),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
