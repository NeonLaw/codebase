module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsdoc/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier'
  ],
  ignorePatterns: [
    '@types/*',
    '.cache/*',
    'build/*',
    'node_modules/*',
    '**/node_modules/*',
    'public/*',
    '**/public/*',
    '**/build/*',
    'packages/interface/src/utils/api.tsx'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'jsdoc',
    'jsx-a11y',
    'prettier',
    'unicorn'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'import/no-default-export': 'error',
    indent: ['error', 2, { SwitchCase: 1 }],
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-returns': 'off',
    'max-len': ['error', { code: 80 }],
    quotes: [2, 'single'],
    'react/no-children-prop': 'off',
    'react/prop-types': 'off',
    semi: ['error', 'always'],
    'sort-imports': 'error',
    'sort-keys': 'error',
    'unicorn/filename-case': [
      'error', {
        case: 'camelCase',
        ignore: [
          /.+\.tsx/,
          /.*gatsby-.*\.js$/
        ]
      }
    ]
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
