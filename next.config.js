/** @type {import('next').NextConfig} */
const nextConfig = {
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
