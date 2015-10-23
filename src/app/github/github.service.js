"use strict";

export default function (ngModule) {
  if (ON_TEST) {
    require("./github.service.spec.js")(ngModule);
  }

  ngModule.factory("GithubService", GithubService);

  /* @ngInject */
  function GithubService($q, $http) {
    var service = {
      getOrgRepos: getOrgRepos,
      setHeaders: setHeaders,
      getRepoCommits: getRepoCommits,
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
        deferred.reject(response);
      }

      return deferred.promise;
    }

    function getRepoCommits (repoName) {
      /**
       * Get the latest commits based on the provided Repository name
       * @param {string} repoName The Repository name
       * @returns {promise}
       */
      var deferred = $q.defer();

      $http.get("https://api.github.com/repos/intridea/" + repoName + "/commits")
        .success(successCB)
        .error(errorCB);

      function successCB (response) {
        deferred.resolve(response);
      }

      function errorCB (response) {
        deferred.reject(response);
      }

      return deferred.promise;
    }

    function setHeaders () {
      /**
       * Set the required headers for the GitHub API
       */
      $http.defaults.headers.common.Accept = "application/vnd.github.v3+json";
    }
  }
}