"use strict";

module.exports = function (ngModule) {
  if (ON_TEST) {
    require("./repository.ctrl.spec.js")(ngModule);
  }

  ngModule.controller("RepositoryCtrl", RepositoryCtrl);

  /* @ngInject */
  function RepositoryCtrl(commits, $stateParams) {
    /*jshint validthis: true */
    var vm = this;

    // Assign all bindable models:
    vm.commits = commits;
    vm.repoName = $stateParams.repo;

    //////////
  }
};