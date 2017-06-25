/**
 * Created by meathill on 2017/6/23.
 */

const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'app'),
  entry: {
    preloader: './preloader.js',
    main: './main.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map',
  watch: true,
  watchOptions: {
    poll: 1000,
    ignored: /node_modules|css|styl|dist|build|docs/
  },
  externals: {
    createjs: 'createjs'
  }
};