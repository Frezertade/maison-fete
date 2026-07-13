import { process } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" data-nav-theme="dark" className="bg-espresso py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.3em] text-champagne">
            How It Works
          </p>
          <h2 className="mt-3 font-display text-4xl text-soft-white md:text-5xl">
            From first spark
            <br />
            <span className="italic text-champagne">to final petal</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => (
            <div
              key={step.step}
              className="rounded-2xl border border-soft-white/10 bg-charcoal/40 p-6 transition-colors hover:border-champagne/30"
            >
              <span className="font-display text-4xl text-champagne/40">
                {step.step}
              </span>
              <h3 className="mt-4 font-display text-2xl text-soft-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/65">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
