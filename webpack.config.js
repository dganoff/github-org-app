"use strict";

var webpack = require("webpack");
var APP = __dirname + "/src/app";
var context = process.env.NODE_ENV || "dev";
var _ = require("lodash");
var exclude = /node_modules/;

var configFns = {
  dev: getDevConfig,
  test: getDevConfig,
  prod: getProdConfig,
};

var config = configFns[context]();

module.exports = config;

//////////

function getDevConfig () {
  var devConfig = {
    context: APP,
    entry: "./index.js",
    output: {
      path: APP,
      filename: "bundle.js",
    },
    module: {
      loaders: _.union(
        getJavaScriptLoaders(),
        [
          {test: /\.html$/, loader: "html-loader"},
          {test: /\.scss$/, loader: "style!css!sass"},
          {test: /\.(svg|png|gif|jpg)$/, loader: "url-loader?limit=8192"},
        ]
      )
    },
    plugins: [
      new webpack.DefinePlugin({
        ON_TEST: process.env.NODE_ENV === "test",
      }),
      new webpack.HotModuleReplacementPlugin()
    ],
  };

  return devConfig;
}

function getProdConfig () {
  var config = getDevConfig();

  config.output.path = __dirname + "/dist";
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
  config.devtool = "source-map";

  return config;
}

function getJavaScriptLoaders() {
  /**
   * Load the JS loaders for either the dev or test environment
   * @private
   */
  var loaders = {
    dev: ["babel", "eslint"],
    test: ["babel", "eslint?configFile=test.eslintrc"],
    prod: ["ng-annotate", "babel", "eslint"]
  };

  var contextLoaders = loaders[context];

  if (context.indexOf("test") === -1 && process.env.COVERAGE !== "true") {
    return [ { test: /\.js$/, loaders: contextLoaders, exclude: exclude } ];
  } else {
    return [
      { test: /\.spec\.js$|\.mock\.js$/, loaders: contextLoaders, exclude: exclude },
      { test: /\.js$/, loaders: ["isparta"], exclude: /node_modules|\.spec.js$|\.mock\.js$/ }
    ];
  }
}