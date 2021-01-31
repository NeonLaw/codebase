module.exports = {
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      options: {
        background_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png',
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        theme_color: '#663399',
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-plugin-offline'
  ],
  siteMetadata: {
    author: '@neonlaw',
    description: 'Michelle and Nick are about to get married!',
    title: 'Michelle and Nick',
  },
};
