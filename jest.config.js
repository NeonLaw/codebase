module.exports = {
  globals: {
    __PATH_PREFIX__: '',
    'ts-jest': {
      isolatedModules: true
    }
  },
  moduleNameMapper: {
    '.+\\.(css)$': 'identity-obj-proxy',
  },
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    'node_modules',
    'build',
    'public',
    '\\.cache',
    '<rootDir>.*/public',
    '<rootDir>.*/cypress'
  ],
  testURL: 'http://localhost'
};
