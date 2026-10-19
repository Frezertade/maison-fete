import Image from "next/image";
import Link from "next/link";
import LeadCta from "@/components/page/LeadCta";
import PageHero from "@/components/page/PageHero";
import SiteChrome from "@/components/page/SiteChrome";
import { posts } from "@/lib/blog";
import { serviceLinks } from "@/lib/content";
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
        intro={[
          "Ideas, timing and cost references for graduation parties, showers, church events and holiday celebrations in Lancaster County. Any figures we quote come from cited public sources.",
        ]}
        image="/images/ceiling-install.jpg"
        imageAlt="Hanging floral installation over a reception table"
        crumbs={[{ name: "Guides", path: "/blog" }]}
        cta={false}
      />
      <section data-nav-theme="light" className="bg-ivory py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <h2 className="font-display text-3xl text-espresso md:text-4xl">
            Planning an event in Lancaster County?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-warm-gray md:text-lg">
            These guides are written for hosts in Lancaster, Lititz, Ephrata,
            Manheim, Mount Joy and nearby towns. They cover what to decorate
            first (usually the photo backdrop), when local weekends fill up,
            and how published prices from area balloon and décor businesses
            compare — so you can request a realistic quote.
          </p>
          <p className="mt-4 text-base leading-relaxed text-warm-gray md:text-lg">
            Lancaster Decorators designs and installs event décor only
            (weddings, birthdays, graduations, showers, church events and
            balloon installs). We do not offer home or interior decorating.
            Prefer a service page? Jump to the event type below.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex rounded-full border border-espresso/15 px-4 py-2 text-sm text-espresso transition-colors hover:border-gold hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section data-nav-theme="light" className="bg-soft-white py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2 md:px-8 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.slug}
              className="overflow-hidden rounded-2xl bg-ivory shadow-[0_20px_60px_rgba(28,22,18,0.04)]"
            >
              <Link href={`/blog/${p.slug}`} className="block">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="font-display text-2xl leading-snug text-espresso">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-sm text-warm-gray">{p.excerpt}</p>
                  <span className="mt-4 inline-block text-[11px] uppercase tracking-[0.2em] text-gold">
                    Read guide →
                  </span>
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
