import Image from "next/image";
import { site } from "@/lib/content";

export default function About() {
  return (
    <section id="about" data-nav-theme="light" className="bg-ivory py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="relative lg:col-span-6">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="img-zoom relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="/images/designer-florals.jpg"
                  alt="Floral designer arranging centerpiece"
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-10 space-y-3 md:mt-16 md:space-y-4">
                <div className="img-zoom relative aspect-square overflow-hidden rounded-2xl">
                  <Image
                    src="/images/place-setting.jpg"
                    alt="Luxury place setting"
                    fill
                    sizes="30vw"
                    className="object-cover"
                  />
                </div>
                <div className="img-zoom relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src="/images/welcome-sign.jpg"
                    alt="Welcome sign with florals"
                    fill
                    sizes="30vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 hidden -translate-x-1/2 rounded-full bg-espresso px-6 py-3 text-[11px] uppercase tracking-[0.2em] text-champagne shadow-xl md:block">
              Serving {site.address}
            </div>
          </div>

          <div className="lg:col-span-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
              Our Studio
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-espresso md:text-5xl">
              Design-led décor for
              <br />
              <span className="italic text-rose">Lancaster celebrations</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-warm-gray">
              Maison Fête is a full-service event decoration studio creating
              refined, photogenic environments for life’s biggest moments. We
              blend florals, textiles, balloons, lighting, and custom details
              into cohesive experiences — tailored to your venue, story, and
              style.
            </p>
            <p className="mt-4 text-base leading-relaxed text-warm-gray">
              Based in the Lancaster, PA area, we travel throughout South
              Central Pennsylvania for weddings, private parties, and corporate
              events. Whether you need a statement arch or a complete room
              transformation, we handle design through teardown.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Custom design concepts",
                "Florals & centerpieces",
                "Balloon installations",
                "Backdrops & photo moments",
                "Tablescapes & linens",
                "Setup & breakdown",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-charcoal"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
