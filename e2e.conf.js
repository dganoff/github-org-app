"use strict";

var specPath = "test/e2e";
exports.config = {
  //seleniumAddress: "http://localhost:4444/wd/hub",

  allScriptsTimeout: 11000,

  specs: [
    specPath + "/**/*.spec.js"
  ],

  baseUrl: "http://localhost:8080",
  seleniumServerJar: "node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar",
  chromeDriver: "node_modules/protractor/selenium/chromedriver",

  jasmineNodeOpts: {
    isVerbose: true,
  },

  onPrepare: function() {
    return browser.get("http://localhost:8080");
  }
};
