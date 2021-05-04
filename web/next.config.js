const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx');

module.exports = withPlugins([
  withMDX(),
], {
  env: {
    environment: process.env.NODE_ENV
  },
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US', 'es-419', 'ur']
  },
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
  webpack(config) {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'file-loader'
      },
    });

    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: 'file-loader'
      },
    });
    return config;
  },
});
