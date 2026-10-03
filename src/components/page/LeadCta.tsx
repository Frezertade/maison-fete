import LeadForm from "@/components/LeadForm";
import { site } from "@/lib/content";

/** Lead form section used on inner pages (anchor: #contact). */
export default function LeadCta({
  heading = "Get free quotes from Lancaster décor pros",
  text = "Share a few details and we’ll match you with up to two vetted, independent Lancaster County pros. Free, no obligation.",
  projectType,
  source,
}: {
  heading?: string;
  text?: string;
  projectType?: string;
  source: string;
}) {
  return (
    <section id="contact" data-nav-theme="light" className="bg-ivory py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">Free Décor Quotes</p>
          <h2 className="mt-3 font-display text-4xl leading-tight text-espresso">{heading}</h2>
          <p className="mt-5 leading-relaxed text-warm-gray">{text}</p>
          <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-gold">Service area</p>
          <p className="mt-1 text-espresso">{site.serviceArea}</p>
          <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-gold">Response time</p>
          <p className="mt-1 text-espresso">{site.hours}</p>
        </div>
        <div className="lg:col-span-7">
          <div className="rounded-3xl border border-espresso/8 bg-soft-white p-6 shadow-[0_30px_80px_rgba(28,22,18,0.06)] md:p-10">
            <LeadForm variant="full" source={source} defaultProjectType={projectType} />
          </div>
        </div>
      </div>
    </section>
  );
}
