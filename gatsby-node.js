const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    node: {
      fs: 'empty'
    }
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/upward-mobility\/.+/)) {
    createPage({
      component: path.resolve('src/pages/upward-mobility.tsx'),
      matchPath: '/upward-mobility/*',
      path: '/upward-mobility',
    });
  }
};
