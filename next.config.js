/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Optional: Enforces best practices for React
  swcMinify: true, // Uses SWC for faster builds
  outputFileTracing: true, // Ensures serverless deployment compatibility
};

module.exports = nextConfig;
