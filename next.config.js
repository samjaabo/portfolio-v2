/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["github.com"], // For hosting profile images if needed
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
};

module.exports = nextConfig;
