(function() {
  "use strict";

  angular
    .module("app")
    .config(configure);

  /* @ngInject */
  function configure($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect here:
    $urlRouterProvider
      .otherwise("/");
  }
})();
