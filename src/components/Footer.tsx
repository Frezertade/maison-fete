import Link from "next/link";
import Logo from "@/components/Logo";
import { nav, serviceLinks, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer
      data-nav-theme="dark"
      className="border-t border-soft-white/10 bg-espresso text-cream"
    >
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" aria-label="Lancaster Decorators home">
              <Logo theme="dark" variant="full" />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
              {site.description}
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.22em] text-champagne">
              Services
            </p>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((item) => (
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
          <div className="md:col-span-2">
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
          <div className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-[0.22em] text-champagne">
              Contact
            </p>
            <ul className="mt-4 space-y-2 text-sm text-cream/70">
              <li>{site.address}</li>
              <li>
                <a href="#contact" className="hover:text-champagne">
                  Request free event décor quotes →
                </a>
              </li>
              <li className="pt-2 text-cream/50">{site.serviceArea}</li>
            </ul>
          </div>
        </div>

        <p className="mt-12 max-w-3xl text-[12px] leading-relaxed text-cream/45">
          Lancaster Decorators is a referral service. We connect customers with
          independent event decorators, stylists and balloon artists in
          Lancaster County, PA; services are performed and priced by those
          independent businesses.
        </p>
        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-soft-white/10 pt-8 text-[11px] uppercase tracking-[0.16em] text-cream/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Lancaster Decorators. All rights reserved.</p>
          <p>Party &amp; Event Decorations · Lancaster, Pennsylvania</p>
        </div>
      </div>
    </footer>
  );
}
