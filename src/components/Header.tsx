"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-ivory/90 backdrop-blur-md shadow-[0_1px_0_rgba(28,22,18,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <a href="#top" className="group relative z-50">
          <span className="font-display text-2xl tracking-[0.08em] text-espresso md:text-[1.65rem]">
            Maison <span className="italic text-gold">Fête</span>
          </span>
          <span className="mt-0.5 block text-[10px] uppercase tracking-[0.28em] text-warm-gray">
            Lancaster, PA
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-elegant text-[13px] uppercase tracking-[0.18em] text-charcoal/80 transition-colors hover:text-espresso"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-espresso/15 bg-espresso px-5 py-2.5 text-[12px] uppercase tracking-[0.2em] text-ivory transition-all hover:bg-charcoal hover:shadow-lg"
          >
            Book Consult
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-espresso transition-all duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-espresso transition-all duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-ivory transition-all duration-500 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8">
          <nav className="flex flex-col gap-6">
            {nav.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-espresso transition-colors hover:text-gold"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <p className="mt-12 text-sm tracking-wide text-warm-gray">
            {site.email}
            <br />
            {site.phone}
          </p>
        </div>
      </div>
    </header>
  );
}
