// Vendor files:
import angular from "angular";

if (ON_TEST) {
  require("angular-mocks/angular-mocks.js");
}

// App files:
import Core from "./core";
import Organization from "./organization";

// Create application:
angular.module("app", [
  // Core application modules:
  Core.name,

  // Feature areas:
  Organization.name,
]);

// Inject global styles:
require("../styles/vendor/vendor.scss");
require("../styles/app.scss");