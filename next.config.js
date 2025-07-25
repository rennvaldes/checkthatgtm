/** @type {import('next').NextConfig} */

const strapiUrl = new URL(
  process.env.NEXT_PUBLIC_STRAPI_BASE_URL || "http://localhost:1337"
);

const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  swcMinify: true,
  outputFileTracing: true,

  // Add assetPrefix for production
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? `${process.env.APP_PROTOCOL}://${process.env.APP_HOST}`
      : "",

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

  async redirects() {
    return [
      {
        source: '/resources/:slug*',
        destination: '/guides/:slug*',
        permanent: true,
      },
      {
        source: '/blog/:id/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/geo-workshop-2025',
        destination: 'https://lu.ma/ai-answers-workshop',
        permanent: true,
      }
    ];
  },
};

module.exports = nextConfig;
