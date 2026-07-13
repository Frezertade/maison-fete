"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { nav, site } from "@/lib/content";

/**
 * Position-aware header colors:
 * - Over dark sections (hero, process, etc.): light text + dark glass
 * - Over light sections: dark text + ivory glass when scrolled
 * Always high contrast so links stay readable.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [overDark, setOverDark] = useState(true); // hero starts dark
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      setScrolled(y > 24);

      // Sample a line under the fixed header (center of header bar)
      const probeY = Math.min(72, window.innerHeight * 0.08);
      const probeX = window.innerWidth / 2;
      const stack = document.elementsFromPoint(probeX, probeY);

      let theme: "dark" | "light" | null = null;
      for (const el of stack) {
        if (!(el instanceof HTMLElement)) continue;
        // Skip the header itself and its children
        if (el.closest("header")) continue;
        const marked = el.closest("[data-nav-theme]") as HTMLElement | null;
        if (marked) {
          theme = marked.dataset.navTheme === "dark" ? "dark" : "light";
          break;
        }
      }

      // Fallback: if still over #top / hero area before first light section
      if (!theme) {
        const hero = document.getElementById("top");
        if (hero) {
          const rect = hero.getBoundingClientRect();
          theme = rect.bottom > probeY + 20 ? "dark" : "light";
        } else {
          theme = "light";
        }
      }

      setOverDark(theme === "dark");
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    // Re-check after layout/images settle
    const t = window.setTimeout(update, 100);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Mobile drawer always uses light theme for readability
  const darkMode = open ? false : overDark;
  // Solid-ish bar when scrolled or menu open; transparent only at top of dark hero
  const solidBar = scrolled || open || !overDark;

  const headerBg = open
    ? "bg-ivory"
    : darkMode
      ? solidBar
        ? "bg-espresso/85 backdrop-blur-md shadow-[0_1px_0_rgba(255,255,255,0.08)]"
        : "bg-gradient-to-b from-espresso/70 via-espresso/35 to-transparent"
      : "bg-ivory/95 backdrop-blur-md shadow-[0_1px_0_rgba(28,22,18,0.08)]";

  const linkClass = darkMode
    ? "text-soft-white/90 hover:text-champagne"
    : "text-charcoal hover:text-espresso";
  const ctaClass = darkMode
    ? "border-champagne/50 bg-champagne text-espresso hover:bg-soft-white hover:border-soft-white"
    : "border-espresso/15 bg-espresso text-ivory hover:bg-charcoal";
  const burgerClass = darkMode ? "bg-soft-white" : "bg-espresso";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerBg}`}
      data-theme={darkMode ? "dark" : "light"}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <a href="#top" className="group relative z-50" aria-label="Maison Fête home">
          <Logo theme={darkMode ? "dark" : "light"} variant="full" priority />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`link-elegant text-[13px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${linkClass}`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`rounded-full border px-5 py-2.5 text-[12px] font-medium uppercase tracking-[0.2em] transition-all duration-300 hover:shadow-lg ${ctaClass}`}
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
            className={`h-0.5 w-6 rounded-full transition-all duration-300 ${burgerClass} ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded-full transition-all duration-300 ${burgerClass} ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu — always high-contrast light panel */}
      <div
        className={`fixed inset-0 z-40 bg-ivory transition-all duration-500 lg:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center px-8">
          <div className="mb-10">
            <Logo theme="light" variant="full" />
          </div>
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
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-10 inline-flex w-fit rounded-full bg-espresso px-6 py-3 text-[12px] uppercase tracking-[0.2em] text-ivory"
          >
            Book Consult
          </a>
          <p className="mt-10 text-sm tracking-wide text-warm-gray">
            {site.email}
            <br />
            {site.phone}
          </p>
        </div>
      </div>
    </header>
  );
}
