const withPlugins = require('next-compose-plugins');
const withNextIntl = require('@moxy/next-intl/plugin');
const withMDX = require('@next/mdx');

const {
  NEXT_PUBLIC_JUSTICE_FOR_RICKIE_SLAUGHTER_URL,
  NEXT_PUBLIC_DELETE_YOUR_DATA_URL,
  NEXT_PUBLIC_DELETE_THEIR_DATA_URL,
  NEXT_PUBLIC_SHOOK_FAMILY_URL,
  NEXT_PUBLIC_NEON_LAW_URL
} = process.env;

module.exports = withPlugins([
  withMDX(),
  withNextIntl(),
], {
  env: {
    environment: process.env.NODE_ENV
  },
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  async rewrites() {
    if (process.env.NODE_ENV === 'development') {
      return [];
    }

    return [
      {
        destination:
          `https://${NEXT_PUBLIC_JUSTICE_FOR_RICKIE_SLAUGHTER_URL}/jfrs/:path*`,
        source: '/jfrs/:path*',
      },
      {
        destination: `https://${NEXT_PUBLIC_SHOOK_FAMILY_URL}/sf/:path*`,
        source: '/sf/:path*',
      },
      {
        destination:
        `https://${NEXT_PUBLIC_DELETE_YOUR_DATA_URL}/delete-your/:path*`,
        source: '/delete-your/:path*',
      },
      {
        destination:
        `https://${NEXT_PUBLIC_DELETE_THEIR_DATA_URL}/delete-their/:path*`,
        source: '/delete-their/:path*',
      },
      {
        destination: `https://${NEXT_PUBLIC_NEON_LAW_URL}/blog/:path*`,
        source: '/blog/:path*',
      },
      {
        destination: `https://${NEXT_PUBLIC_NEON_LAW_URL}/portal/:path*`,
        source: '/portal/:path*',
      },
      {
        destination: `https://${NEXT_PUBLIC_NEON_LAW_URL}/templates/:path*`,
        source: '/templates/:path*',
      },
      {
        destination: `https://${NEXT_PUBLIC_NEON_LAW_URL}/:path*`,
        source: '/:path*',
      },
    ];
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.m4a$/,
      use: {
        loader: 'file-loader',
        options: {
          esModule: false,
          name: '[name].[ext]',
          outputPath: 'public/audio/'
        }
      },
    });
    return config;
  },
});
