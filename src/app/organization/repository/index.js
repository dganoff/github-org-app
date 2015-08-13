"use strict";

module.exports = function (ngModule) {
  require("./repository.routes.js")(ngModule);
  require("./repository.ctrl.js")(ngModule);
};