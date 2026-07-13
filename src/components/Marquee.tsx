const items = [
  "Weddings",
  "Birthdays",
  "Baby Showers",
  "Graduations",
  "Engagements",
  "Proposals",
  "Anniversaries",
  "Corporate Galas",
  "Bridal Showers",
  "Holiday Parties",
];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div data-nav-theme="light" className="overflow-hidden border-y border-espresso/8 bg-cream py-4">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 font-display text-xl italic text-espresso/70 md:text-2xl"
          >
            {item}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-champagne" />
          </span>
        ))}
      </div>
    </div>
  );
}
