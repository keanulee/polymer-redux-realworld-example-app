const path = require('path');
const webpack = require('webpack');
const MinifyPlugin = require('babel-minify-webpack-plugin');

module.exports = {
  entry: './src/components/app-view.js',
  plugins: [
    new MinifyPlugin()
  ],
  output: {
    filename: 'src/components/app-view.js',
    chunkFilename: 'src/components/[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              'syntax-dynamic-import',
              'transform-object-rest-spread'
            ]
          }
        }
      }
    ]
  }
};
