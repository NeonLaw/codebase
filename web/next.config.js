const withPWA = require('next-pwa');
const withNextIntl = require('@moxy/next-intl/plugin');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
  },
  target: 'serverless',
});

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx', 'tsx', 'ts'],
});

module.exports = withNextIntl()();