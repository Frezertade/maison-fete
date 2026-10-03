import FaqSection from "@/components/page/FaqSection";
import JsonLd from "@/components/page/JsonLd";
import LeadCta from "@/components/page/LeadCta";
import PageHero from "@/components/page/PageHero";
import RelatedLinks from "@/components/page/RelatedLinks";
import SiteChrome from "@/components/page/SiteChrome";
import Sources from "@/components/page/Sources";
import Link from "next/link";
import Image from "next/image";
import { towns } from "@/lib/towns";
import { eventPagePaths, servicePageByPath } from "@/lib/service-pages";
import { BUSINESS_ID, absoluteUrl } from "@/lib/seo";
import type { ServicePage } from "@/lib/service-pages";

export default function ServicePageView({ page }: { page: ServicePage }) {
  return (
    <SiteChrome>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.h1}
        intro={page.intro}
        image={page.image}
        imageAlt={page.imageAlt}
        crumbs={
          page.hub
            ? [{ name: page.name, path: page.path }]
            : [
                { name: "Event Decorations", path: "/event-decor" },
                { name: page.name, path: page.path },
              ]
        }
      />

      {page.hub && (
        <section data-nav-theme="light" className="bg-soft-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <h2 className="font-display text-3xl text-espresso md:text-4xl">Choose your event</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {eventPagePaths.map((path) => {
                const ev = servicePageByPath[path];
                return (
                  <Link key={path} href={path} className="group overflow-hidden rounded-2xl bg-ivory shadow-[0_20px_60px_rgba(28,22,18,0.04)]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image src={ev.image} alt={ev.imageAlt} fill sizes="(max-width: 768px) 100vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-2xl leading-snug text-espresso">{ev.name}</h3>
                      <span className="mt-2 inline-block text-[11px] uppercase tracking-[0.2em] text-gold">Ideas & quotes →</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section data-nav-theme="light" className="bg-ivory py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <h2 className="font-display text-3xl text-espresso md:text-4xl">{page.includes.heading}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.includes.items.map((item) => (
              <div key={item.title} className="rounded-2xl bg-soft-white p-6 shadow-[0_20px_60px_rgba(28,22,18,0.04)]">
                <h3 className="font-display text-2xl text-espresso">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-warm-gray">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section data-nav-theme="light" className="bg-soft-white py-20 md:py-24">
        <div className="mx-auto max-w-3xl space-y-14 px-5 md:px-8">
          {page.sections.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display text-3xl text-espresso md:text-4xl">{s.heading}</h2>
              <div className="mt-4 space-y-4 leading-relaxed text-charcoal/85">
                {s.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
              {s.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-charcoal/85">
                  {s.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="rounded-2xl border border-gold/30 bg-ivory p-6 md:p-8">
            <h2 className="font-display text-3xl text-espresso">{page.pricing.heading}</h2>
            <div className="mt-4 space-y-4 leading-relaxed text-charcoal/85">
              {page.pricing.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            {page.pricing.bullets && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-charcoal/85">
                {page.pricing.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            )}
            {page.pricing.sources && <Sources sources={page.pricing.sources} />}
            <a
              href="#contact"
              className="mt-6 inline-flex rounded-full bg-espresso px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-ivory hover:bg-charcoal"
            >
              Request a free quote
            </a>
          </div>

          <div>
            <h2 className="font-display text-3xl text-espresso">Towns we cover for {page.name.toLowerCase()}</h2>
            <p className="mt-4 leading-relaxed text-charcoal/85">
              Throughout Lancaster County, including{" "}
              {towns.map((t, i) => (
                <span key={t.slug}>
                  {t.name.replace(" (city)", "")}
                  {i < towns.length - 2 ? ", " : i === towns.length - 2 ? " and " : ""}
                </span>
              ))}
              . See the{" "}
              <Link href="/service-area" className="text-gold underline underline-offset-2">
                full service area
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <FaqSection faqs={page.faqs} heading={`${page.name} in Lancaster: FAQ`} />
      <RelatedLinks paths={page.related} />
      <LeadCta source={page.slug} projectType={page.projectType} heading={`Get free ${page.name.toLowerCase()} quotes`} text={`Tell us your date, venue, guest count and style, and we’ll match you with up to two independent Lancaster County decorators. Free, no obligation.`} />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: `${page.name} in Lancaster County, PA`,
          serviceType: page.name,
          description: page.description,
          url: absoluteUrl(page.path),
          provider: { "@id": BUSINESS_ID },
          areaServed: [
            { "@type": "AdministrativeArea", name: "Lancaster County, PA" },
            ...towns.map((t) => ({ "@type": "City", name: `${t.name.replace(" (city)", "")}, PA` })),
          ],
        }}
      />
    </SiteChrome>
  );
}
