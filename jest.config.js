export default {
  runner: 'jest-light-runner',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/packages/',
  ],
  collectCoverageFrom: ['src/**/*.js'],
};
