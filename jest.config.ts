/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  // Automatically clear mock calls, instances and results before every test
  clearMocks: true,

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: 'v8',

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  // Enables tsconfig-paths in jest
  moduleNameMapper: {
    '@errors/(.*)': '<rootDir>/src/domain/errors/$1',
    '@errors': '<rootDir>/src/domain/errors',
    '@entities/(.*)': '<rootDir>/src/domain/entities/$1',
    '@infrastructure/(.*)': '<rootDir>/src/infrastructure/$1',
  },

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',
  // The glob patterns Jest uses to detect test files
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
}
