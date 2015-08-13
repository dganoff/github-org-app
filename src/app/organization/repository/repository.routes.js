"use strict";

module.exports = function (ngModule) {
  ngModule.config(configure);

  /* @ngInject */
  function configure($stateProvider) {
    $stateProvider
      .state("org.repo", {
        url: "/repo/:repo",
        template: require("./repository.html"),
        controller: "RepositoryCtrl as vm",
        resolve: {
          commits: function (GithubService, $stateParams) {
            return GithubService.getRepoCommits($stateParams.repo);
          }
        },
      });
  }
};