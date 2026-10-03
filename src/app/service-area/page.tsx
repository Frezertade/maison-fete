import Link from "next/link";
import FaqSection from "@/components/page/FaqSection";
import LeadCta from "@/components/page/LeadCta";
import PageHero from "@/components/page/PageHero";
import SiteChrome from "@/components/page/SiteChrome";
import { pageLabel } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";
import { towns } from "@/lib/towns";

export const metadata = pageMetadata({
  title: "Event Decorators Across Lancaster County, PA — Service Area",
  description:
    "Event decorations for graduation parties, weddings, baby showers, birthdays and church events in Lancaster, Lititz, Ephrata, Manheim, Mount Joy, Elizabethtown, Strasburg, Leola, Millersville and Willow Street.",
  path: "/service-area",
  image: "/images/proposal-setup.jpg",
  imageAlt: "Garden pathway styled with florals and candles",
});

const faqs = [
  {
    q: "Do you serve my town?",
    a: "We decorate events throughout Lancaster County. Enter your ZIP code in the form. Events just outside the county are fine to submit too; we’ll let you know if we can travel there.",
  },
  {
    q: "Do you charge for delivery or travel?",
    a: "Any delivery or travel cost for a distant venue is spelled out in your quote before you book, so there are no surprises.",
  },
  {
    q: "Do you do the decorating yourselves?",
    a: "Yes. Lancaster Decorators designs, sets up and takes down your décor. If we’re booked on your date or a request is outside our specialty, we’ll tell you up front and can connect you with a vetted local decorator.",
  },
];

export default function ServiceAreaPage() {
  return (
    <SiteChrome>
      <PageHero
        eyebrow="Service Area"
        title="Event Decorators Across Lancaster County, PA"
        intro={[
          "Lancaster Decorators decorates graduation parties, weddings, baby showers, birthdays, church events and more throughout Lancaster County. Below are some of the towns we cover, with ZIP codes and the events that are a good fit.",
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
          Don’t see your town? We also decorate in Columbia, Denver, Akron, New Holland, Quarryville and the rest of Lancaster County. Just enter your ZIP code.
        </p>
      </section>
      <FaqSection faqs={faqs} heading="Service area FAQ" />
      <LeadCta source="service-area" />
    </SiteChrome>
  );
}
