module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsdoc/recommended',
  ],
  ignorePatterns: ['.cache/', 'build/', 'node_modules/', 'public/'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import', 'jest', 'jsdoc'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/interface-name-prefix': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    'indent': ['error', 2, { SwitchCase: 1 }],
    'max-len': ['error', { 'code': 80 }],
    'quotes': [2, 'single'],
    'react/no-children-prop': 'off',
    'react/prop-types': 'off',
    'semi': ['error', 'always'],
    'sort-imports': 'error',
    'sort-keys': 'error',
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
