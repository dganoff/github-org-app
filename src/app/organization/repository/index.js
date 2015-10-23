"use strict";

export default function (ngModule) {
  require("./repository.routes.js")(ngModule);
  require("./repository.ctrl.js")(ngModule);
}