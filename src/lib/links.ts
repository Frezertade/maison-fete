import { posts } from "@/lib/blog";
import { servicePages } from "@/lib/service-pages";

const labels: Record<string, string> = {
  "/": "Home",
  "/service-area": "Service area: Lancaster County towns",
  "/blog": "Event décor guides",
  ...Object.fromEntries(servicePages.map((p) => [p.path, p.name])),
  ...Object.fromEntries(posts.map((p) => [`/blog/${p.slug}`, p.title])),
};

export const pageLabel = (path: string) => labels[path] || path;
