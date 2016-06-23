'use strict';

const path = require('path');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/components/index.jsx'),
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }]
  }
};