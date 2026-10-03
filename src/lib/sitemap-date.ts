/** Serialize a sitemap lastmod without throwing on Invalid Date. */
export function sitemapLastmod(input: string | Date, fallback?: string): string {
  const date = input instanceof Date ? input : new Date(input);
  if (Number.isNaN(date.getTime())) {
    return fallback ?? new Date().toISOString();
  }
  return date.toISOString();
}
