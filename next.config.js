/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'pt', 'es', 'de'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
