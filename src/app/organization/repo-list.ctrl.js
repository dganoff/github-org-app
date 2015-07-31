(function() {
  "use strict";

  angular
    .module("app")
    .controller("RepoListCtrl", RepoListCtrl);

  /* @ngInject */
  function RepoListCtrl(GithubService, $state) {
    /*jshint validthis: true */
    var vm = this;

    // Assign all bindable models:
    vm.getOrgRepos = getOrgRepos;
    vm.repos = [];
    vm.sort = "stargazers_count";
    vm.sortOptions = [
      {label: "Stars", value: "stargazers_count"},
      {label: "Forks", value: "forks_count"},
    ];
    vm.openRepo = openRepo;
    vm.isLoadingRepos = false;

    activate();

    //////////

    function activate () {
      /**
       * Kick off the controller
       */
      getOrgRepos("netflix");
    }

    function getOrgRepos (org) {
      /**
       * Call the service to retrieve all the Repositories
       * in a GitHub Organization
       * @param {string} org The Organization to look up
       */
      vm.isLoadingRepos = true;

      GithubService.getOrgRepos(org)
        .then(gotRepos, errorRepos);

      function gotRepos (response) {
        vm.isLoadingRepos = false;
        vm.repos = response;
      }

      function errorRepos () {
        vm.isLoadingRepos = false;
      }
    }

    function openRepo (repoName) {
      /**
       * Navigate to the provided Repository state
       * @param {string} repoName The selected Repository
       */
      $state.go("org.repo", {repo: repoName});
    }
  }
})();