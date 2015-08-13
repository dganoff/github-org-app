"use strict";

var webpack = require("webpack");

var APP = __dirname + "/src/app";

module.exports = {
  context: APP,
  entry: "./index.js",
  output: {
    path: APP,
    filename: "bundle.js",
  },
  module: {
    loaders: [
      {test: /\.html$/, loader: "html-loader"},
      {test: /\.scss$/, loader: "style!css!sass"},
      {test: /\.(svg|png|gif|jpg)$/, loader: "url-loader?limit=8192"},
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      ON_TEST: process.env.NODE_ENV === "test",
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
};