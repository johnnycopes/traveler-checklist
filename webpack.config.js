const webpack = require('webpack');
const path = require('path');

let config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // files ending with .js
        exclude: /node_modules/, // exclude the node modules directory
        use: {
          loader: 'babel-loader', // use this loader
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/, // files ending with .scss
        loader: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};

module.exports = config;