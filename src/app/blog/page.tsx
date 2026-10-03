import Image from "next/image";
import Link from "next/link";
import LeadCta from "@/components/page/LeadCta";
import PageHero from "@/components/page/PageHero";
import SiteChrome from "@/components/page/SiteChrome";
import { posts } from "@/lib/blog";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Lancaster Event Décor Guides: Grad Parties, Showers & Church Events",
  description:
    "Guides for Lancaster County hosts: graduation party decoration ideas and costs, baby shower venues, church anniversary and first communion décor, and holiday party tips.",
  path: "/blog",
  image: "/images/ceiling-install.jpg",
  imageAlt: "Hanging floral installation over a reception table",
});

export default function BlogIndex() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Guides"
        title="Lancaster Event Décor Guides"
        intro={["Ideas, timing and cost references for graduation parties, showers, church events and more in Lancaster County. Any figures we quote come from cited public sources."]}
        image="/images/ceiling-install.jpg"
        imageAlt="Hanging floral installation over a reception table"
        crumbs={[{ name: "Guides", path: "/blog" }]}
        cta={false}
      />
      <section data-nav-theme="light" className="bg-ivory py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-3 md:px-8">
          {posts.map((p) => (
            <article key={p.slug} className="overflow-hidden rounded-2xl bg-soft-white shadow-[0_20px_60px_rgba(28,22,18,0.04)]">
              <Link href={`/blog/${p.slug}`} className="block">
                <div className="relative aspect-[16/9]">
                  <Image src={p.image} alt={p.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <h2 className="font-display text-2xl leading-snug text-espresso">{p.title}</h2>
                  <p className="mt-2 text-sm text-warm-gray">{p.excerpt}</p>
                  <span className="mt-4 inline-block text-[11px] uppercase tracking-[0.2em] text-gold">Read guide →</span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <LeadCta source="blog" />
    </SiteChrome>
  );
}
