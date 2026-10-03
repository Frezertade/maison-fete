import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" data-nav-theme="light" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
              Free Décor Quotes
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-espresso md:text-5xl">
              Tell us about
              <br />
              <span className="italic text-rose">your event</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-warm-gray">
              Graduation party, wedding, shower, birthday or church event: share
              a few details and we’ll match you with up to two Lancaster-area
              event decorators. Free, no obligation.
            </p>

            <div className="mt-10 space-y-5 text-sm">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                  Service Area
                </p>
                <p className="mt-1 text-lg text-espresso">{site.serviceArea}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                  Response Time
                </p>
                <p className="mt-1 text-lg text-espresso">{site.hours}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-espresso/8 bg-soft-white p-6 shadow-[0_30px_80px_rgba(28,22,18,0.06)] md:p-10">
              <LeadForm variant="full" source="contact" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
