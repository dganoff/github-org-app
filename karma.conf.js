module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine"],

    // list of files / patterns to load in the browser
    files: [
      // vendor files:
      "bower_components/angular/angular.js",
      "bower_components/angular-ui-router/release/angular-ui-router.js",
      "bower_components/angular-mocks/angular-mocks.js",
      "bower_components/angular-animate/angular-animate.js",

      // app files:
      "src/app/app.js",
      "src/app/app.config.js",
      "src/app/**/*.js",

      // test files:
      "test/support/specHelper.js",
      "test/app/**/*.spec.js",
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      "src/app/**/*.js": ["coverage"],
    },

    // test results reporter to use
    // possible values: "dots", "progress"
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["mocha", "coverage"],

    coverageReporter: {
      reporters: [{
        type: "text-summary",
      }, {
        type: "json",
        dir: "test/coverage",
        subdir: "json",
      }, {
        type: "html",
        dir: "test/coverage",
        subdir: "html",
      }],
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ["PhantomJS"],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
