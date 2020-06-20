const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    {
      options: {
        defaultLanguage: 'en',
        languages: ['en', 'es'],
        path: `${__dirname}/src/intl`,
      },
      resolve: 'gatsby-plugin-intl',
    },
    {
      options: {
        directives: {
          'connect-src': '* data: blob: \'unsafe-inline\'',
          'default-src': '*  data: blob: filesystem: about: ' +
            'ws: wss: \'unsafe-inline\' \'unsafe-eval\'',
          'font-src': '* data: blob: \'unsafe-inline\'',
          'frame-src': '* data: blob: \'unsafe-inline\';',
          'img-src': '* data: blob: \'unsafe-inline\'',
          'script-src': '* \'unsafe-eval\'',
          'style-src': '* data: blob: \'unsafe-inline\'',
        },
        disableOnDev: true,
        mergeDefaultDirectives: true,
        mergeScriptHashes: true,
        mergeStyleHashes: false,
        reportOnly: false,
      },
      resolve: 'gatsby-plugin-csp',
    },
    {
      options: {
        aliases: {
          '@components': './components',
          '@containers': './containers',
          '@forms': './forms',
          '@layouts': './layouts',
          '@themes': './themes',
          '@utils': './utils',
        },
        root: './src',
      },
      resolve: 'gatsby-plugin-module-resolver',
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        /* eslint-disable @typescript-eslint/camelcase */
        background_color: '#000',
        display: 'standalone',
        icon: 'src/images/logo.png',
        name: 'Neon Law',
        short_name: 'Neon Law',
        start_url: '/',
        theme_color: '#3B27BA',
        /* eslint-enable @typescript-eslint/camelcase */
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-plugin-react-helmet',
    {
      options: {
        anonymize: true,
        cookieDomain: 'neonlaw.com',
        exclude: ['/portal/**', '/lawyers/**', '/admin/**'],
        head: false,
        pageTransitionDelay: 0,
        respectDNT: true,
        siteSpeedSampleRate: 10,
        trackingId: 'UA-161836812-1',
      },
      resolve: 'gatsby-plugin-google-analytics',
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sitemap',
    {
      options: {
        env: {
          development: {
            policy: [{ disallow: ['/'], userAgent: '*' }]
          },
          production: {
            policy: [{ allow: '/', userAgent: '*' }]
          },
          staging: {
            policy: [{ disallow: ['/'], userAgent: '*' }]
          },
        },
        host: process.env.SITE_URL,
        sitemap: `${process.env.SITE_URL}/sitemap.xml`,
      },
      resolve: 'gatsby-plugin-robots-txt',
    },
    {
      options: {
        prefixes: [
          '/upward-mobility/*',
          '/lawyers/*',
          '/admin/*',
        ]
      },
      resolve: 'gatsby-plugin-create-client-paths',
    },
  ],
  siteMetadata: {
    author: '@neonlaw',
    description: 'Neon Law. The Upward Mobility Law Firm.',
    siteUrl: process.env.SITE_URL,
    title: 'Neon Law',
  },
};
