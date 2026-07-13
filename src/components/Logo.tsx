import Image from "next/image";

type LogoProps = {
  /** Visual theme for contrast against page background */
  theme?: "dark" | "light";
  /** Layout variant */
  variant?: "full" | "mark" | "wordmark";
  className?: string;
  priority?: boolean;
};

/**
 * Maison Fête brand logo.
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
  const monogramSrc =
    theme === "dark"
      ? "/images/logo/monogram-dark.jpg"
      : "/images/logo/monogram-light.jpg";

  if (variant === "mark") {
    return (
      <span className={`inline-flex shrink-0 ${className}`}>
        <Image
          src={monogramSrc}
          alt="Maison Fête"
          width={48}
          height={48}
          priority={priority}
          className="h-10 w-10 rounded-full object-cover ring-1 ring-champagne/30 md:h-11 md:w-11"
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
          Maison{" "}
          <span
            className={`italic ${theme === "dark" ? "text-champagne" : "text-gold"}`}
          >
            Fête
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
      <Image
        src={monogramSrc}
        alt=""
        width={56}
        height={56}
        priority={priority}
        className={`h-11 w-11 shrink-0 rounded-full object-cover shadow-sm md:h-12 md:w-12 ${
          theme === "dark"
            ? "ring-1 ring-champagne/40"
            : "ring-1 ring-espresso/10"
        }`}
        aria-hidden
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={`font-display text-[1.35rem] tracking-[0.06em] transition-colors duration-300 md:text-[1.55rem] ${
            theme === "dark" ? "text-soft-white" : "text-espresso"
          }`}
        >
          Maison{" "}
          <span
            className={`italic ${
              theme === "dark" ? "text-champagne" : "text-gold"
            }`}
          >
            Fête
          </span>
        </span>
        <span
          className={`mt-1 text-[9px] uppercase tracking-[0.26em] transition-colors duration-300 md:text-[10px] ${
            theme === "dark" ? "text-cream/70" : "text-warm-gray"
          }`}
        >
          Event Décor · Lancaster
        </span>
      </span>
    </span>
  );
}

/** Decorative seal for about / footer moments */
export function LogoSeal({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/logo/seal.jpg"
      alt="Maison Fête — Est. Lancaster"
      width={280}
      height={280}
      className={`h-auto w-full rounded-full object-contain ${className}`}
    />
  );
}
