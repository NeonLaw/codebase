const withPlugins = require('next-compose-plugins');
const withNextIntl = require('@moxy/next-intl/plugin');
const withMDX = require('@next/mdx');

module.exports = withPlugins([
  withMDX(),
  withNextIntl(),
], {
  env: {
    environment: process.env.NODE_ENV
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
