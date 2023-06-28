/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
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
