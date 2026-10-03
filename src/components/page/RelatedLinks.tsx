import Link from "next/link";
import { pageLabel } from "@/lib/links";

export default function RelatedLinks({
  paths,
  heading = "Related services & guides",
}: {
  paths: string[];
  heading?: string;
}) {
  return (
    <section data-nav-theme="light" className="bg-ivory pt-4 pb-4">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <h2 className="text-[11px] uppercase tracking-[0.3em] text-gold">{heading}</h2>
        <ul className="mt-4 flex flex-wrap gap-3">
          {paths.map((p) => (
            <li key={p}>
              <Link
                href={p}
                className="inline-flex rounded-full border border-espresso/15 px-5 py-2.5 text-sm text-espresso transition-colors hover:border-gold hover:text-gold"
              >
                {pageLabel(p)} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
