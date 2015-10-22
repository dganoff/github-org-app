"use strict";

var RepoListCtrl = require("./repo-list.js");

module.exports = function (ngModule) {
  ngModule.directive("repoList", function() {
    return {
      restrict: "E",
      bindToController: true,
      scope: {},
      controller: RepoListCtrl,
      controllerAs: "vm",
      template: require("./repo-list.html"),
    };
  });
};