(function() {
  "use strict";

  angular
    .module("app")
    .config(configure);

  /* @ngInject */
  function configure($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect here:
    $urlRouterProvider
      .otherwise("/org/list");

    // Application States/Routes:
    $stateProvider
      // --------------------------------------------------
      // Organization:
      // --------------------------------------------------
      .state("org", {
        url: "/org",
        abstract: true,
        templateUrl: "app/organization/organization.html",
      })
      .state("org.repoList", {
        url: "/list",
        templateUrl: "app/organization/repo-list.html",
        controller: "RepoListCtrl as vm",
      })
      .state("org.repo", {
        url: "/repo/:repo",
        templateUrl: "app/repository/repository.html",
        controller: "RepositoryCtrl as vm",
        resolve: {
          commits: function (GithubService, $stateParams) {
            return GithubService.getRepoCommits($stateParams.repo);
          }
        },
      });
  }
})();
