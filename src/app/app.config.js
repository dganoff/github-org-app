"use strict";

module.exports = function (ngModule) {
  ngModule.config(configure);

  /* @ngInject */
  function configure($urlRouterProvider) {
    // For any unmatched url, redirect here:
    $urlRouterProvider
      .otherwise("/org/list");
  }
};