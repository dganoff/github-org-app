// Vendor files:
const angular = require("angular");
const uiRouter = require("angular-ui-router");
const ngAnimate = require("angular-animate");

var ngModule = angular.module("app", [uiRouter, ngAnimate]);

if (ON_TEST) {
  require("angular-mocks/angular-mocks.js");
}

// Bootstrap the application with the created Angular module:
require("./app.config.js")(ngModule);
require("./app.run.js")(ngModule);
require("./github")(ngModule);
require("./organization")(ngModule);

// Inject global styles:
require("../styles/vendor/vendor.scss");
require("../styles/app.scss");