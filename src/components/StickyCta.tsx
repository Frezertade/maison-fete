/** Always-visible mobile CTA so the lead form is one tap away on every screen. */
export default function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-espresso/10 bg-ivory/95 p-3 backdrop-blur-md lg:hidden">
      <a
        href="#contact"
        className="block w-full rounded-full bg-espresso px-6 py-3.5 text-center text-[12px] font-medium uppercase tracking-[0.2em] text-ivory"
      >
        Get Free Décor Quotes
      </a>
    </div>
  );
}
