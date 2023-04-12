/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["photos.hotelbeds.com"],
  },
  async redirects() {
    return [
      {
        source: "/flights",
        destination: "/500",
        permanent: true,
      },
      {
        source: "/car",
        destination: "/500",
        permanent: true,
      },
      {
        source: "/attractions",
        destination: "/500",
        permanent: true,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
