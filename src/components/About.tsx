import Image from "next/image";
import { LogoSeal } from "@/components/Logo";
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
            {/* Brand seal float */}
            <div className="absolute -bottom-8 left-1/2 z-10 hidden w-28 -translate-x-1/2 md:block md:w-32">
              <LogoSeal className="shadow-2xl shadow-espresso/20 ring-4 ring-ivory" />
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="mb-6 flex items-center gap-4 md:hidden">
              <LogoSeal className="h-20 w-20" />
            </div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
              Why Lancaster Decorators
            </p>
            <h2 className="mt-3 font-display text-4xl leading-tight text-espresso md:text-5xl">
              Lancaster’s event décor network,
              <br />
              <span className="italic text-rose">not just one studio</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-warm-gray">
              Lancaster Decorators connects Lancaster County families, churches
              and businesses with independent event decorators, stylists and
              balloon artists. Instead of calling around, you
              send one request and get matched with the right pro for your
              style, budget, and timeline.
            </p>
            <p className="mt-4 text-base leading-relaxed text-warm-gray">
              Our partners cover Lancaster, Lititz, Ephrata, Manheim, Mount Joy,
              Elizabethtown, Strasburg, and the rest of South Central
              Pennsylvania, from a backyard graduation party or baby shower to a
              church anniversary banquet or a full wedding reception.
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Graduation party décor",
                "Wedding & shower décor",
                "Birthday & quinceañera décor",
                "Church event decorations",
                "Free, no-obligation quotes",
                "Vetted local professionals",
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
