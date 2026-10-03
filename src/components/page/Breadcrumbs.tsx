import Link from "next/link";
import JsonLd from "@/components/page/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export type Crumb = { name: string; path: string };

/** Visible breadcrumb trail + BreadcrumbList JSON-LD. */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-[11px] uppercase tracking-[0.18em] text-cream/70">
        <ol className="flex flex-wrap items-center gap-2">
          {all.map((c, i) => (
            <li key={c.path} className="flex items-center gap-2">
              {i < all.length - 1 ? (
                <>
                  <Link href={c.path} className="hover:text-champagne">
                    {c.name}
                  </Link>
                  <span aria-hidden>/</span>
                </>
              ) : (
                <span aria-current="page" className="text-champagne">
                  {c.name}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd data={breadcrumbJsonLd(all)} />
    </>
  );
}
