import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-soft-white/10 bg-espresso text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <a href="#top" className="font-display text-3xl tracking-[0.08em]">
              Maison <span className="italic text-champagne">Fête</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/60">
              {site.description}
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.22em] text-champagne">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-cream/70 transition-colors hover:text-champagne"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-[0.22em] text-champagne">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li>{site.address}</li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-champagne">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\D/g, "")}`}
                  className="hover:text-champagne"
                >
                  {site.phone}
                </a>
              </li>
              <li className="pt-2 text-cream/50">{site.serviceArea}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-soft-white/10 pt-8 text-[11px] uppercase tracking-[0.16em] text-cream/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Maison Fête. All rights reserved.</p>
          <p>Event Décor · Lancaster, Pennsylvania</p>
        </div>
      </div>
    </footer>
  );
}
