module.exports = {
  name: 'filipino-food-delicacies',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/filipino-food-delicacies',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
