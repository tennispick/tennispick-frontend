/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
};

module.exports = nextConfig;
