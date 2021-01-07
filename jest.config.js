module.exports = {
  globals: {
    __PATH_PREFIX__: '',
    'ts-jest': {
      isolatedModules: true
    }
  },
  moduleNameMapper: {
    '.+\\.(css)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|)$':
      '<rootDir>/__mocks__/fileMock.js',
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
  testURL: 'http://localhost',
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
};
