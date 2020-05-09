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
      matchPath: '/upward-mobility/.+',
      path: '/upward-mobility',
    });
  }

  if (page.path.match(/^\/en\/upward-mobility\/.+/)) {
    createPage({
      component: path.resolve('src/pages/upward-mobility.tsx'),
      matchPath: '/en/upward-mobility/.+',
      path: '/en/upward-mobility',
    });
  }

  if (page.path.match(/^\/es\/upward-mobility\/.+/)) {
    createPage({
      component: path.resolve('src/pages/upward-mobility.tsx'),
      matchPath: '/es/upward-mobility/.+',
      path: '/es/upward-mobility',
    });
  }
};
