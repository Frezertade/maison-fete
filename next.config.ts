import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Interior / home-staging content was retired when the site refocused on
  // event decorating (Oct 2026). permanent: true → 308.
  async redirects() {
    return [
      { source: "/interior-decorating", destination: "/", permanent: true },
      { source: "/home-staging", destination: "/", permanent: true },
      { source: "/blog/interior-decorator-cost-lancaster-pa", destination: "/blog", permanent: true },
      { source: "/blog/home-staging-lancaster-pa", destination: "/blog", permanent: true },
    ];
  },
};

export default nextConfig;
