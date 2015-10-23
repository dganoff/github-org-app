"use strict";

export default function (ngModule) {
  require("./repo-list.routes.js")(ngModule);
  require("./repo-list.ctrl.js")(ngModule);
  require("./repo-list.directive.js")(ngModule);
}