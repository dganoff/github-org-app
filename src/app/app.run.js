"use strict";

module.exports = function (ngModule) {
  ngModule.run(run);

  /* @ngInject */
  function run(GithubService, $rootScope) {
    activate();

    //////////

    function activate () {
      GithubService.setHeaders();
      scrollToTop();
    }

    function scrollToTop () {
      /**
       * Scroll to the top of the viewport upon state change
       */
      $rootScope.$on("$stateChangeSuccess", function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      });
    }
  }
};