import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Hide the floating "N" dev-tools button; build and runtime errors still show.
  devIndicators: false,
  images: {
    // Images uploaded in Sanity Studio are served from its CDN.
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io", pathname: "/images/**" }],
  },
  transpilePackages: ["sanity"],
};

export default nextConfig;
