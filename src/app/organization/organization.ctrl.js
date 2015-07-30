(function() {
  "use strict";

  angular
    .module("app")
    .controller("OrganizationCtrl", OrganizationCtrl);

  /* @ngInject */
  function OrganizationCtrl(GithubService) {
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
      GithubService.getOrgRepos(org)
        .then(gotRepos, errorRepos);

      function gotRepos (response) {
        vm.repos = response;
      }

      function errorRepos (response) {
        console.log(response);
      }
    }
  }
})();