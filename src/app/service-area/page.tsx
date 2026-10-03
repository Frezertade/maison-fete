import Link from "next/link";
import FaqSection from "@/components/page/FaqSection";
import LeadCta from "@/components/page/LeadCta";
import PageHero from "@/components/page/PageHero";
import SiteChrome from "@/components/page/SiteChrome";
import { pageLabel } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";
import { towns } from "@/lib/towns";

export const metadata = pageMetadata({
  title: "Service Area: Decorators Across Lancaster County, PA",
  description:
    "Lancaster Decorators matches homeowners and hosts with décor pros in Lancaster, Lititz, Ephrata, Manheim, Mount Joy, Elizabethtown, Strasburg, Leola, Millersville and Willow Street.",
  path: "/service-area",
  image: "/images/proposal-setup.jpg",
  imageAlt: "Garden pathway styled with florals and candles",
});

const faqs = [
  {
    q: "Do you serve my town?",
    a: "We take requests from anywhere in Lancaster County. Enter your ZIP code in the form and we’ll match you with pros who travel to your area. Projects just outside the county are fine to submit too; we’ll let you know if no one can cover it.",
  },
  {
    q: "Do the décor pros charge for travel?",
    a: "Some do, depending on distance. Travel fees are set by each independent pro, so ask when you compare quotes.",
  },
  {
    q: "Is Lancaster Decorators a local business with a showroom?",
    a: "No. We’re a free online referral service for Lancaster County. The decorators, stylists and stagers we refer are independent local businesses.",
  },
];

export default function ServiceAreaPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Service Area"
        title="Décor Pros Across Lancaster County, PA"
        intro={[
          "We match homeowners, sellers, realtors and event hosts with independent decorators, stylists, stagers and balloon artists throughout Lancaster County. Below are some of the towns we cover, with ZIP codes and the services that tend to fit.",
        ]}
        image="/images/proposal-setup.jpg"
        imageAlt="Garden pathway styled with florals and candles"
        crumbs={[{ name: "Service Area", path: "/service-area" }]}
      />
      <section data-nav-theme="light" className="bg-ivory py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2 md:px-8">
          {towns.map((t) => (
            <article key={t.slug} id={t.slug} className="rounded-2xl bg-soft-white p-7 shadow-[0_20px_60px_rgba(28,22,18,0.04)]">
              <h2 className="font-display text-3xl text-espresso">{t.name}, PA</h2>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-gold">ZIP {t.zips.join(", ")}</p>
              <p className="mt-4 leading-relaxed text-charcoal/85">{t.location}</p>
              <p className="mt-3 leading-relaxed text-charcoal/85">{t.suggestions}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {t.links.map((l) => (
                  <li key={l}>
                    <Link href={l} className="inline-flex rounded-full border border-espresso/15 px-4 py-1.5 text-sm text-espresso hover:border-gold hover:text-gold">
                      {pageLabel(l)}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl px-5 text-center text-sm text-warm-gray">
          Don’t see your town? We also take requests from Columbia, Denver, Akron, New Holland, Quarryville and the rest of Lancaster County. Just enter your ZIP code.
        </p>
      </section>
      <FaqSection faqs={faqs} heading="Service area FAQ" />
      <LeadCta source="service-area" />
    </SiteChrome>
  );
}
