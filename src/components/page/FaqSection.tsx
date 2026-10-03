import JsonLd from "@/components/page/JsonLd";
import { faqJsonLd, type Faq } from "@/lib/seo";

/** Visible FAQ (native <details>) + matching FAQPage JSON-LD. */
export default function FaqSection({
  faqs,
  heading = "Frequently asked questions",
}: {
  faqs: Faq[];
  heading?: string;
}) {
  return (
    <section data-nav-theme="light" className="bg-cream py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <p className="text-[11px] uppercase tracking-[0.3em] text-gold">FAQ</p>
        <h2 className="mt-3 font-display text-3xl text-espresso md:text-4xl">{heading}</h2>
        <div className="mt-10 divide-y divide-espresso/10 border-y border-espresso/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left text-lg font-medium text-espresso">
                <h3 className="text-lg font-medium">{f.q}</h3>
                <span aria-hidden className="mt-1 text-gold transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-warm-gray">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
      <JsonLd data={faqJsonLd(faqs)} />
    </section>
  );
}
