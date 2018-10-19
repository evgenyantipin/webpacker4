module.exports = {
  "roots": ["app/javascript"],
  testRegex: '.*test\\.jsx?$',
  setupFiles: ['./jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  moduleNameMapper: {
    // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    // '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
    styles$: '<rootDir>/__mocks__/styleMock.js',
  },
}
