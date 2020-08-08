exports.plugins = [
  'preset-lint-recommended',
  ['remark-lint-list-item-indent', 'space'],
  ['remark-lint-no-literal-urls', false],
  'preset-lint-consistent',
  ['remark-lint-heading-style', false],
  ['toc', { tight: true, maxDepth: 2, heading: 'contents' }],
  'comment-config',
  ['github', { repository: 'NeonLaw/codebase' }],
  'validate-links',
  ['lint-write-good', false],
  ['file-extension', false]
]
