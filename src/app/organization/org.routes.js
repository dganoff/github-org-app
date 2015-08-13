"use strict";

module.exports = function (ngModule) {
  ngModule.config(configure);

  /* @ngInject */
  function configure($stateProvider) {
    $stateProvider
      .state("org", {
        url: "/org",
        abstract: true,
        template: require("./organization.html"),
      })
      .state("org.repoList", {
        url: "/list",
        template: require("./repo-list.html"),
        controller: "RepoListCtrl as vm",
      });
  }
};