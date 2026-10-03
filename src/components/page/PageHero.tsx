import Image from "next/image";
import Breadcrumbs, { type Crumb } from "@/components/page/Breadcrumbs";

export default function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
  crumbs,
  cta = true,
}: {
  eyebrow: string;
  title: string;
  intro: string[];
  image: string;
  imageAlt: string;
  crumbs: Crumb[];
  cta?: boolean;
}) {
  return (
    <section
      id="top"
      data-nav-theme="dark"
      className="relative overflow-hidden bg-espresso pb-16 pt-32 text-soft-white md:pb-24 md:pt-40"
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/80 via-espresso/70 to-espresso" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Breadcrumbs items={crumbs} />
        <p className="mt-8 text-[11px] uppercase tracking-[0.3em] text-champagne">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl leading-tight md:text-6xl">{title}</h1>
        <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-cream/85 md:text-lg">
          {intro.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
        {cta && (
          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-champagne px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.2em] text-espresso transition-colors hover:bg-soft-white"
          >
            Get Free Quotes
          </a>
        )}
      </div>
    </section>
  );
}
