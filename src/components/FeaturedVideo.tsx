export default function FeaturedVideo() {
  return (
    <section data-nav-theme="dark" className="relative bg-espresso py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-champagne">
              Signature Installations
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-soft-white md:text-5xl">
              Floral ceilings,
              <br />
              <span className="italic text-champagne">unforgettable rooms</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70 md:text-base">
              We craft immersive moments — hanging installations, statement
              arches, and candlelit tablescapes — designed for Lancaster venues
              and countryside estates.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full border border-champagne/40 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-champagne transition-all hover:bg-champagne hover:text-espresso"
            >
              Request a Design
            </a>
          </div>

          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
            <div className="img-zoom relative aspect-[16/10]">
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/images/ceiling-install.jpg"
              >
                <source src="/videos/ceiling-install.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
