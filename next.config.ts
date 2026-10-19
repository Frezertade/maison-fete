import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Interior / home-staging content was retired when the site refocused on
  // event decorating (Oct 2026). permanent: true → 308.
  // Destinations are event-focused canonical Lancaster URLs (not dead paths).
  async redirects() {
    return [
      // Retired interior / home-staging pages (still show as "Page with redirect" in GSC)
      { source: "/interior-decorating", destination: "/", permanent: true },
      { source: "/interior-decorating/", destination: "/", permanent: true },
      { source: "/home-staging", destination: "/", permanent: true },
      { source: "/home-staging/", destination: "/", permanent: true },
      {
        source: "/blog/interior-decorator-cost-lancaster-pa",
        destination: "/event-decor",
        permanent: true,
      },
      {
        source: "/blog/interior-decorator-cost-lancaster-pa/",
        destination: "/event-decor",
        permanent: true,
      },
      {
        source: "/blog/home-staging-lancaster-pa",
        destination: "/event-decor",
        permanent: true,
      },
      {
        source: "/blog/home-staging-lancaster-pa/",
        destination: "/event-decor",
        permanent: true,
      },

      // Short / legacy aliases → canonical event pages (avoid soft 404s Google may discover)
      { source: "/wedding", destination: "/wedding-decor", permanent: true },
      { source: "/weddings", destination: "/wedding-decor", permanent: true },
      { source: "/balloons", destination: "/balloon-decor", permanent: true },
      { source: "/birthday", destination: "/birthday-party-decorations", permanent: true },
      { source: "/birthdays", destination: "/birthday-party-decorations", permanent: true },
      { source: "/graduation", destination: "/graduation-party-decorations", permanent: true },
      { source: "/baby-shower", destination: "/baby-shower-decorations", permanent: true },
      { source: "/church", destination: "/church-event-decorations", permanent: true },
      { source: "/holiday", destination: "/holiday-decorating", permanent: true },
      { source: "/home-decor", destination: "/", permanent: true },
      { source: "/interior-decor", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
