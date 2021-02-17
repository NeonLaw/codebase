const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const withNextIntl = require('@moxy/next-intl/plugin');
const withMDX = require('@next/mdx');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
  },
  target: 'serverless',
});

module.exports = withPlugins([
  withMDX(),
  withNextIntl(),
], {
  env: {
    environment: process.env.NODE_ENV
  },
  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
});
