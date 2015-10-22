"use strict";

module.exports = function (ngModule) {
  require("./org.routes.js")(ngModule);
  require("./repo-list")(ngModule);
  require("./repository")(ngModule);
};