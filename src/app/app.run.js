(function() {
  "use strict";

  angular
    .module("app")
    .run(run);

  /* @ngInject */
  function run(GithubService) {
    activate();

    //////////

    function activate () {
      GithubService.setHeaders();
    }
  }
})();