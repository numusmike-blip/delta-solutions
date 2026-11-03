import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The pricing page was removed; send old links and search results to Services.
      { source: "/pricing", destination: "/services", permanent: true },
      { source: "/es/pricing", destination: "/es/services", permanent: true },
    ];
  },
};

export default nextConfig;
