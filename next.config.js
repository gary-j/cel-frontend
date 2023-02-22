const withPwa = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = withPwa({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: [
      'avatars.dicebear.com',
      'unsplash.com',
      'picsum.photos',
      'i.picsum.photos',
      'lh3.googleusercontent.com',
      'platform-lookaside.fbsbx.com',
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { icon: true, ref: true },
        },
      ],
    });

    return config;
  },
});

module.exports = nextConfig;
