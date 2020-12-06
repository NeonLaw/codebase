const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;

  /* eslint-disable no-useless-escape */
  const blogMdxFiles = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/blogPosts//" } }) {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  /* eslint-enable no-useless-escape */

  if (blogMdxFiles.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create blog pages
  const blogPages = blogMdxFiles.data.allMdx.edges;

  blogPages.forEach(({ node }) => {
    createPage({
      component: path.resolve('./src/layouts/postLayout.tsx'),
      context: { id: node.id },
      path: `${node.frontmatter.slug}/`,
    });
  });
};
