/**
 * Lancaster Decorators "LD" monogram, drawn in code so no raster asset carries
 * the brand name.
 */
export function Monogram({
  theme = "light",
  className = "",
  title,
}: {
  theme?: "dark" | "light";
  className?: string;
  title?: string;
}) {
  const bg = theme === "dark" ? "#231814" : "#f7f1e5";
  const fg = theme === "dark" ? "#decca6" : "#b2945c";
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <circle cx="50" cy="50" r="50" fill={bg} />
      <circle cx="50" cy="50" r="44" fill="none" stroke={fg} strokeOpacity="0.35" strokeWidth="0.8" />
      <text
        x="50"
        y="51"
        textAnchor="middle"
        dominantBaseline="central"
        fill={fg}
        fontSize="40"
        letterSpacing="-1"
        style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontWeight: 600 }}
      >
        LD
      </text>
    </svg>
  );
}

type LogoProps = {
  /** Visual theme for contrast against page background */
  theme?: "dark" | "light";
  /** Layout variant */
  variant?: "full" | "mark" | "wordmark";
  className?: string;
  priority?: boolean;
};

/**
 * Lancaster Decorators brand logo.
 * - full: monogram mark + wordmark (header default)
 * - mark: monogram only (compact / mobile icon)
 * - wordmark: text-focused lockup
 */
export default function Logo({
  theme = "light",
  variant = "full",
  className = "",
  priority = false,
}: LogoProps) {
  if (variant === "mark") {
    return (
      <span className={`inline-flex shrink-0 ${className}`}>
        <Monogram
          theme={theme}
          title="Lancaster Decorators"
          className="h-10 w-10 rounded-full ring-1 ring-champagne/30 md:h-11 md:w-11"
        />
      </span>
    );
  }

  if (variant === "wordmark") {
    return (
      <span className={`inline-flex flex-col ${className}`}>
        <span
          className={`font-display text-2xl tracking-[0.08em] md:text-[1.65rem] ${
            theme === "dark" ? "text-soft-white" : "text-espresso"
          }`}
        >
          Lancaster{" "}
          <span
            className={`italic ${theme === "dark" ? "text-champagne" : "text-gold"}`}
          >
            Decorators
          </span>
        </span>
        <span
          className={`mt-0.5 text-[10px] uppercase tracking-[0.28em] ${
            theme === "dark" ? "text-cream/70" : "text-warm-gray"
          }`}
        >
          Lancaster, PA
        </span>
      </span>
    );
  }

  // Full lockup: monogram + wordmark
  return (
    <span
      className={`inline-flex items-center gap-2.5 md:gap-3 ${className}`}
    >
      <Monogram
        theme={theme}
        className={`h-11 w-11 shrink-0 rounded-full shadow-sm md:h-12 md:w-12 ${
          theme === "dark"
            ? "ring-1 ring-champagne/40"
            : "ring-1 ring-espresso/10"
        }`}
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`whitespace-nowrap font-display text-[1.2rem] tracking-[0.06em] sm:text-[1.35rem] transition-colors duration-300 md:text-[1.55rem] ${
            theme === "dark" ? "text-soft-white" : "text-espresso"
          }`}
        >
          Lancaster{" "}
          <span
            className={`italic ${
              theme === "dark" ? "text-champagne" : "text-gold"
            }`}
          >
            Decorators
          </span>
        </span>
        <span
          className={`mt-1 text-[9px] uppercase tracking-[0.26em] transition-colors duration-300 md:text-[10px] ${
            theme === "dark" ? "text-cream/70" : "text-warm-gray"
          }`}
        >
          Event Decorators · Lancaster, PA
        </span>
      </span>
    </span>
  );
}

/** Decorative seal for about / footer moments */
export function LogoSeal({ className = "" }: { className?: string }) {
  const gold = "#b0965f";
  const font = { fontFamily: "var(--font-cormorant), Georgia, serif" };
  return (
    <svg
      viewBox="0 0 1024 1024"
      role="img"
      aria-label="Lancaster Decorators — Lancaster County, PA"
      className={`block h-auto w-full rounded-full ${className}`}
    >
      <defs>
        <clipPath id="ld-seal-inner">
          <circle cx="513" cy="513" r="218" />
        </clipPath>
        <path id="ld-seal-top" d="M 231 513 A 282 282 0 0 1 795 513" />
        <path id="ld-seal-bottom" d="M 208 513 A 305 305 0 0 0 818 513" />
      </defs>
      <circle cx="512" cy="512" r="512" fill="#f8f8f8" />
      <circle cx="513" cy="513" r="352" fill="#f0ebe0" />
      <circle cx="513" cy="513" r="346" fill="none" stroke={gold} strokeWidth="9" />
      <circle cx="513" cy="513" r="330" fill="none" stroke={gold} strokeWidth="2" />
      <circle cx="513" cy="513" r="232" fill="none" stroke={gold} strokeWidth="2" strokeDasharray="2 6" />
      <circle cx="513" cy="513" r="222" fill="#f5f2ea" stroke={gold} strokeWidth="2" />
      {/* Peony illustration from the original seal artwork (inner circle only) */}
      <image
        href="/images/logo/seal.jpg"
        x="0"
        y="0"
        width="1024"
        height="1024"
        clipPath="url(#ld-seal-inner)"
      />
      <text fill={gold} fontSize="56" fontWeight="600" letterSpacing="5" style={font}>
        <textPath href="#ld-seal-top" startOffset="50%" textAnchor="middle">
          LANCASTER DECORATORS
        </textPath>
      </text>
      <text fill={gold} fontSize="40" fontWeight="500" letterSpacing="7" style={font}>
        <textPath href="#ld-seal-bottom" startOffset="50%" textAnchor="middle">
          LANCASTER COUNTY · PA
        </textPath>
      </text>
      <circle cx="198" cy="513" r="6" fill={gold} />
      <circle cx="828" cy="513" r="6" fill={gold} />
    </svg>
  );
}
