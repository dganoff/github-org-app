"use strict";

export default ngModule => {
  ngModule.config(configure);

  /* @ngInject */
  function configure($urlRouterProvider) {
    // For any unmatched url, redirect here:
    $urlRouterProvider
      .otherwise("/org/list");
  }
};