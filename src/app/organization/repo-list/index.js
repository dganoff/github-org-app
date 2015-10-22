"use strict";

module.exports = function (ngModule) {
  require("./repo-list.routes.js")(ngModule);
  require("./repo-list.directive.js")(ngModule);

  if (ON_TEST) {
    require("./repo-list.spec.js")();
  }
};