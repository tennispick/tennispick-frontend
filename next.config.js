/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sihyunhada.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
