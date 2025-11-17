// jest.config.js (O código está correto para o Jest, o erro é do linter/TypeScript)
/** @type {import('ts-jest').JestConfigWithTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
  preset: 'ts-jest', 
  testEnvironment: 'jsdom', 
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'], 
  moduleNameMapper: {
    '\\.module\\.scss$': 'identity-obj-proxy', 
  },
  moduleDirectories: ['node_modules', 'src'], 
};