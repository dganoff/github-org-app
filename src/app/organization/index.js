"use strict";

module.exports = function (ngModule) {
  require("./org.routes.js")(ngModule);
  require("./repo-list.ctrl.js")(ngModule);

  require("./repository")(ngModule);
};