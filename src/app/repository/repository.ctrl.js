(function() {
  "use strict";

  angular
    .module("app")
    .controller("RepositoryCtrl", RepositoryCtrl);

  /* @ngInject */
  function RepositoryCtrl(commits) {
    /*jshint validthis: true */
    var vm = this;

    // Assign all bindable models:
    vm.commits = commits;

    //////////
  }
})();