/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {

  experimental: {
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apod.nasa.gov',
        port: '',
        pathname: '/apod/image/*/**',
      },
    ],
  },
};
