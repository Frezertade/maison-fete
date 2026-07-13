import { services } from "@/lib/content";
import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
              What We Style
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-espresso md:text-5xl lg:text-6xl">
              Every celebration,
              <br />
              <span className="italic text-rose">beautifully set</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-warm-gray md:text-base">
            From intimate proposals to full ballroom receptions — we design,
            install, and tear down so you can host without the stress.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <article
              key={service.slug}
              className="group relative overflow-hidden rounded-2xl bg-cream"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="img-zoom relative aspect-[4/5] overflow-hidden">
                {service.video ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster={service.image}
                  >
                    <source src={service.video} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-soft-white">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-champagne">
                    {service.subtitle}
                  </p>
                  <h3 className="mt-1 font-display text-3xl">{service.title}</h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-cream/85 opacity-0 transition-all duration-500 group-hover:max-h-28 group-hover:opacity-100">
                    {service.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
