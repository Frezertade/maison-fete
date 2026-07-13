import { testimonials } from "@/lib/content";

export default function Testimonials() {
  return (
    <section data-nav-theme="light" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            Kind Words
          </p>
          <h2 className="mt-3 font-display text-4xl text-espresso md:text-5xl">
            Loved by hosts across
            <br />
            <span className="italic text-rose">Lancaster County</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col justify-between rounded-2xl bg-soft-white p-8 shadow-[0_20px_60px_rgba(28,22,18,0.04)]"
            >
              <p className="font-display text-xl leading-relaxed text-charcoal italic md:text-[1.35rem]">
                “{t.quote}”
              </p>
              <footer className="mt-8 border-t border-espresso/8 pt-5">
                <cite className="not-italic">
                  <span className="block text-sm font-medium tracking-wide text-espresso">
                    {t.name}
                  </span>
                  <span className="mt-1 block text-[11px] uppercase tracking-[0.16em] text-warm-gray">
                    {t.event}
                  </span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
