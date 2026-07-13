import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      data-nav-theme="dark"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-espresso"
    >
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          className="video-cover absolute inset-0 h-full w-full scale-105 opacity-80"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/hero-wedding.jpg"
        >
          <source src="/videos/hero-tablescape.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/55 to-espresso/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/50 via-transparent to-transparent" />
      </div>

      {/* Subtle brand monogram watermark */}
      <div
        className="pointer-events-none absolute right-[-6%] top-[12%] hidden w-[min(42vw,420px)] opacity-[0.18] md:block"
        aria-hidden
      >
        <Image
          src="/images/logo/monogram-dark.jpg"
          alt=""
          width={420}
          height={420}
          className="h-auto w-full rounded-full mix-blend-screen"
          priority
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <p className="animate-fade-up text-[11px] uppercase tracking-[0.35em] text-champagne/90 md:text-xs">
          Event Décor Studio · Lancaster County
        </p>
        <h1 className="animate-fade-up delay-100 mt-5 max-w-4xl font-display text-[3.1rem] leading-[0.95] tracking-tight text-soft-white sm:text-6xl md:text-7xl lg:text-[5.25rem]">
          Spaces that feel
          <br />
          <span className="italic text-champagne">unforgettable</span>
        </h1>
        <p className="animate-fade-up delay-200 mt-6 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
          Full-service decoration and styling for weddings, birthdays, baby
          showers, graduations, and celebrations across Lancaster, PA — designed
          to photograph beautifully and feel even better in person.
        </p>
        <div className="animate-fade-up delay-300 mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-champagne px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-espresso transition-all hover:bg-gold hover:shadow-[0_12px_40px_rgba(201,168,124,0.35)]"
          >
            Plan Your Event
          </a>
          <a
            href="#gallery"
            className="rounded-full border border-soft-white/30 px-7 py-3.5 text-[12px] uppercase tracking-[0.2em] text-soft-white transition-all hover:border-soft-white hover:bg-soft-white/10"
          >
            View Gallery
          </a>
        </div>

        <div className="animate-fade-up delay-400 mt-14 grid max-w-2xl grid-cols-3 gap-6 border-t border-soft-white/15 pt-8 text-soft-white/80">
          {[
            { n: "250+", l: "Events Styled" },
            { n: "12+", l: "Years Craft" },
            { n: "5★", l: "Client Love" },
          ].map((stat) => (
            <div key={stat.l}>
              <div className="font-display text-2xl text-champagne md:text-3xl">
                {stat.n}
              </div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-cream/60 md:text-[11px]">
                {stat.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 right-6 hidden items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-cream/50 md:flex">
        <span>Scroll</span>
        <span className="block h-10 w-px bg-gradient-to-b from-cream/50 to-transparent" />
      </div>
    </section>
  );
}
