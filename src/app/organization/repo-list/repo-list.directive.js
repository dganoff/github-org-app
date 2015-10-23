"use strict";

export default function (ngModule) {
  ngModule.directive("repoList", function() {
    return {
      restrict: "E",
      bindToController: true,
      scope: {},
      controller: "RepoListCtrl as vm",
      template: require("./repo-list.html"),
    };
  });
}