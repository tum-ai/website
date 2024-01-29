/**
 * @type {import('next').NextConfig}
 **/
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
  async redirects() {
    return [
      {
        source: "/join-us",
        destination: "https://join-us.tum-ai.com",
        permanent: false,
      },
      {
        source: "/education",
        destination: "https://education.tum-ai.com",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
