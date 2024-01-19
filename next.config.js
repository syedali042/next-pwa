const withPWA = require('@ducanh2912/next-pwa').default({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  dest: 'public',
  fallbacks: {
    document: '/offline',
  },
  workboxOptions: {
    disableDevLogs: true,
  },
  // ... other options you like
});
/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withPWA(nextConfig);
