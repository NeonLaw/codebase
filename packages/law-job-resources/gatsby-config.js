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
        siteUrl: 'https://www.lawjobresources.com',
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
        name: 'Law Job Resources',
        short_name: 'Law Job Resources',
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
        host: process.env.GATSBY_SITE_URL,
        sitemap: `${process.env.GATSBY_SITE_URL}/sitemap.xml`,
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
    description: 'Law Job Resources',
    siteUrl: process.env.GATSBY_SITE_URL,
    title: 'Law Job Resources',
  },
};
