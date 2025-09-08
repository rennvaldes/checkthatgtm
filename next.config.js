/** @type {import('next').NextConfig} */

const strapiUrl = new URL(
  process.env.NEXT_PUBLIC_STRAPI_BASE_URL || "http://localhost:1337"
);

const nextConfig = {
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  swcMinify: true,
  outputFileTracing: true,

  images: {
    // Allow Strapi assets and safe external HTTPS images
    remotePatterns: [
      {
        protocol: strapiUrl.protocol.replace(":", ""),
        hostname: strapiUrl.hostname,
        port: strapiUrl.port || "",
        pathname: "/uploads/**",
      },
      // Also allow 127.0.0.1 if used instead of localhost
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
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
        source: '/workshop',
        destination: 'https://lu.ma/ai-answers-workshop?utm_source=tldr-0728',
        permanent: true,
      }
    ];
  },
};

module.exports = nextConfig;