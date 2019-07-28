module.exports = {
  name: 'recipe',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/recipe',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
