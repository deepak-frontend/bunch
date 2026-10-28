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
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          // Stop other sites framing the pages (clickjacking).
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
