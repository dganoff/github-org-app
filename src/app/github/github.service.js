(function() {
  "use strict";

  angular
    .module("app")
    .factory("GithubService", GithubService);

  /* @ngInject */
  function GithubService($q, $http) {
    var service = {
      getOrgRepos: getOrgRepos,
    };

    return service;

    //////////

    function getOrgRepos (org) {
      /**
       * Gets the list of public repositories for a given GitHub Organization
       * @param {string} org The organization to look up
       * @returns {promise}
       */
      var deferred = $q.defer();

      $http.get("https://api.github.com/orgs/" + org + "/repos")
        .success(successCB)
        .error(errorCB);

      function successCB (response) {
        deferred.resolve(response);
      }

      function errorCB (response) {
        deferred.resolve(response);
      }

      return deferred.promise;
    }
  }
})();