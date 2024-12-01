/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
 trailingSlash: true, // Có thể giúp khi bạn gặp vấn đề với URL
  publicRuntimeConfig: {
    staticFolder: '/public',
  },
};

module.exports = nextConfig;
