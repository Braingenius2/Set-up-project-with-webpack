const path = require('path');

module.exports = {
  mode: 'developement',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};