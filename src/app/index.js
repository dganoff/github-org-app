var angular = require("angular"),
    uiRouter = require("angular-ui-router"),
    ngAnimate = require("angular-animate");

if (ON_TEST) {
  require("angular-mocks/angular-mocks.js");
}

var ngModule = angular.module("app", [uiRouter, ngAnimate]);

require("./app.config.js")(ngModule);
require("./app.run.js")(ngModule);

require("./github")(ngModule);
require("./organization")(ngModule);

// Styles:
require("../styles/vendor/vendor.scss");
require("../styles/app.scss");