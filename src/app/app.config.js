(function() {
  "use strict";

  angular
    .module("app")
    .config(configure);

  /* @ngInject */
  function configure($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect here:
    $urlRouterProvider
      .otherwise("/org");

    // Application States/Routes:
    $stateProvider
      // --------------------------------------------------
      // Home:
      // --------------------------------------------------
      .state("org", {
        url: "/org",
        templateUrl: "app/organization/organization.html",
        controller: "OrganizationCtrl as vm",
      });
  }
})();
