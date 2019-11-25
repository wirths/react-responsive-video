module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  testRegex: '((\\.|/*.)(spec))\\.js?$',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
