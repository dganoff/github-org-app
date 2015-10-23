"use strict";

export default function (ngModule) {
  ngModule.config(configure);

  /* @ngInject */
  function configure($stateProvider) {
    $stateProvider
      .state("org.repoList", {
        url: "/list",
        template: "<repo-list></repo-list>",
      });
  }
}