// entry --> output
const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      // looking for all files that end in .js
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      // looking for all files that end in .css
      // .s?css$ makes the 's' optional, we cna stil handle .css
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  // lets us know which component error occurs instead of in bundle.js
  devServer: {
    contentBase: path.join(__dirname, 'public')
  }
};
