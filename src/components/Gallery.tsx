"use client";

import { gallery } from "@/lib/content";
import Image from "next/image";
import { useMemo, useState } from "react";

const filters = [
  "All",
  "Weddings",
  "Birthdays",
  "Baby Showers",
  "Graduations",
  "Corporate",
  "Installations",
  "Details",
];

export default function Gallery() {
  const [active, setActive] = useState("All");

  const items = useMemo(() => {
    if (active === "All") return gallery;
    return gallery.filter((g) => g.category === active);
  }, [active]);

  return (
    <section id="gallery" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            Portfolio
          </p>
          <h2 className="mt-3 font-display text-4xl text-espresso md:text-5xl lg:text-6xl">
            A visual love letter
            <br />
            <span className="italic text-rose">to celebration</span>
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.16em] transition-all ${
                active === f
                  ? "bg-espresso text-ivory"
                  : "bg-soft-white text-warm-gray hover:text-espresso"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((item) => (
            <figure
              key={item.src + item.alt}
              className="group mb-4 break-inside-avoid overflow-hidden rounded-xl bg-ivory"
            >
              <div
                className={`img-zoom relative ${
                  item.span === "lg"
                    ? "aspect-[4/5]"
                    : item.span === "sm"
                      ? "aspect-square"
                      : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-espresso/70 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-champagne">
                      {item.category}
                    </p>
                    <p className="mt-0.5 font-display text-lg text-soft-white">
                      {item.alt}
                    </p>
                  </div>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
