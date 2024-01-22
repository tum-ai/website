/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.tum-ai.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "**.amazonaws.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
