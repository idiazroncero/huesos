const path = require('path');

module.exports = {
    entry: {
      'dist': './src/js/index.js',
    },
    output: {
      path: path.resolve(__dirname),
      filename: '[name]/huesos.js'
    }
}