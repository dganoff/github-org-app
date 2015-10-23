"use strict";

export default function(ngModule) {
  require("./org.routes.js")(ngModule);
  require("./repo-list")(ngModule);
  require("./repository")(ngModule);
}