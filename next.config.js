/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
 trailingSlash: true,
  publicRuntimeConfig: {
    staticFolder: '/public',
  },
};

module.exports = nextConfig;
