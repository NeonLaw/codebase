const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-leaflet',
    {
      options: {
        siteUrl: 'https://www.justiceforrickieslaughter.com',
      },
      resolve: 'gatsby-plugin-canonical-urls',
    },
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
        name: 'content',
        path: `${__dirname}/src/content/`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        background_color: '#000',
        display: 'standalone',
        icon: 'src/images/logo.png',
        name: 'Justice For Rickie Slaughter',
        short_name: 'Justice For Rickie Slaughter',
        start_url: '/',
        theme_color: '#3B27BA',
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-plugin-react-helmet',
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
          '/upward-mobility/*'
        ]
      },
      resolve: 'gatsby-plugin-create-client-paths',
    },
  ],
  siteMetadata: {
    author: '@neonlaw',
    description: 'Justice For Rickie Slaughter',
    siteUrl: process.env.SITE_URL,
    title: 'Justice For Rickie Slaughter',
  },
};
