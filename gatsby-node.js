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
  const mdxFiles = await graphql(`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/content\//" } }
      ) {
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

  if (mdxFiles.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create blog post pages.
  const pages = mdxFiles.data.allMdx.edges;

  pages.forEach(({ node }) => {
    createPage({
      component: path.resolve('./src/layouts/mdxLayout.tsx'),
      context: { id: node.id },
      path: node.frontmatter.slug,
    });
  });
};
