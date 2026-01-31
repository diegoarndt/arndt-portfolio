/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ['en', 'pt', 'es', 'de'],
    defaultLocale: 'en',
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;
