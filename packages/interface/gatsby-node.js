const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty',
    }
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;

  /* eslint-disable no-useless-escape */
  const flashcards = await graphql(`
    query {
      neon {
        allFlashcards {
          nodes {
            id
          }
        }
      }
    }
  `);

  /* eslint-disable no-useless-escape */
  const contentMdxFiles = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/content//" } }) {
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

  if (contentMdxFiles.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading content pages');
  }

  if (blogMdxFiles.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create flashcard pages.
  const flashcardPages = flashcards.data.neon.allFlashcards.nodes;

  if (flashcardPages.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  flashcardPages.forEach((node) => {
    createPage({
      component: path.resolve('./src/layouts/flashcardLayout.tsx'),
      context: { id: node['id'] },
      path: `/bar-prep/flashcards/${node['id']}`,
    });
  });

  // Create content pages.
  const contentPages = contentMdxFiles.data.allMdx.edges;

  contentPages.forEach(({ node }) => {
    createPage({
      component: path.resolve('./src/layouts/mdxLayout.tsx'),
      context: { id: node.id },
      path: node.frontmatter.slug,
    });
  });

  // Create blog pages
  const blogPages = blogMdxFiles.data.allMdx.edges;

  blogPages.forEach(({ node }) => {
    createPage({
      component: path.resolve('./src/layouts/postLayout.tsx'),
      context: { id: node.id },
      path: `${node.frontmatter.slug}/`,
    });
  });

  /* eslint-disable no-useless-escape */
  const templateMdxFiles = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/templates//" } }) {
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

  if (templateMdxFiles.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading content pages');
  }

  // Create blog post pages.
  const templatePages = templateMdxFiles.data.allMdx.edges;

  templatePages.forEach(({ node }) => {
    createPage({
      component: path.resolve('./src/layouts/templateLayout.tsx'),
      context: { id: node.id },
      path: node.frontmatter.slug,
    });
  });
};
