"use strict";

var webpack = require("webpack");
var APP = __dirname + "/src/app";
var ENV = process.env.NODE_ENV || "dev";
var _ = require("lodash");
var exclude = /node_modules/;
var autoprefixer = require('autoprefixer');

var configFns = {
  dev: getDevConfig,
  test: getDevConfig,
  prod: getProdConfig,
};

// Generate the config based on the environment
var config = configFns[ENV]();

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
        getJavaScriptLoaders(ENV),
        [
          {test: /\.html$/, loader: "html-loader"},
          {test: /\.scss$/, loader: "style!css!postcss!sass"},
          {test: /\.(svg|png|gif|jpg)$/, loader: "url-loader?limit=8192"},
        ]
      )
    },
    postcss: function () {
      return [autoprefixer({ browsers: ["last 1 version"] })];
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
  var prodConfig = getDevConfig(); // use dev config as base

  prodConfig.output.path = __dirname + "/dist";
  prodConfig.plugins.push(new webpack.optimize.UglifyJsPlugin());
  prodConfig.devtool = "source-map";

  return prodConfig;
}

function getJavaScriptLoaders(environment) {
  /**
   * Generate the JavaScript loaders array based on the environment
   * @param {string} environment The current build environment
   * @private
   */
  var loaders = {
    dev: ["babel", "eslint"],
    test: ["babel", "eslint?configFile=test.eslintrc"],
    prod: ["ng-annotate", "babel", "eslint"]
  };

  var contextLoaders = loaders[environment];

  if (environment.indexOf("test") === -1 && process.env.COVERAGE !== "true") {
    return [{ test: /\.js$/, loaders: contextLoaders, exclude: exclude }];
  } else {
    return [
      { test: /\.spec\.js$|\.mock\.js$/, loaders: contextLoaders, exclude: exclude },
      { test: /\.js$/, loaders: ["isparta"], exclude: /node_modules|\.spec.js$|\.mock\.js$/ }
    ];
  }
}