/** @type {import('next').NextConfig} */

const strapiUrl = new URL(
  process.env.NEXT_PUBLIC_STRAPI_BASE_URL || "http://localhost:1337"
);

const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  swcMinify: true,
  outputFileTracing: true,

  // Add this section to handle the base URL
  env: {
    NEXT_PUBLIC_BASE_URL: `${process.env.APP_PROTOCOL}://${process.env.APP_HOST}`,
  },

  // Keep your existing Strapi config if needed
  images: {
    remotePatterns: [
      {
        protocol: strapiUrl.protocol.replace(":", ""),
        hostname: strapiUrl.hostname,
        port: strapiUrl.port || "",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "**",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
