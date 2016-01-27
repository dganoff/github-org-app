"use strict";

import angular from "angular";
import "angular-ui-router";
import "angular-animate";

import Config from "./app.config.js";
import Run from "./app.run.js";

const CoreModule = angular.module("app.core", [
  // Vendor modules:
  "ui.router",
  "ngAnimate",
]);

Config(CoreModule);
Run(CoreModule);

export default CoreModule;