module.exports = {
  levels: [
    '**/*.blocks'
  ],

  excludePaths: [
    'node_modules/**'
  ],

  plugins: {
    'bemhint-fs-naming': true,
    'bemhint-deps-specification': true
  }
};
