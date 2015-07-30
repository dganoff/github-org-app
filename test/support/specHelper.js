"use strict";

var $controller,
    $http,
    $httpBackend,
    $rootScope,
    $q;

beforeEach(function() {
  module("app");
  inject(function (_$injector_, _$rootScope_) {
    $rootScope = (_$rootScope_.$new()).$new();
    $controller = _$injector_.get("$controller");
    $httpBackend = _$injector_.get("$httpBackend");
    $http = _$injector_.get("$http");
    $q = _$injector_.get("$q");
  });

  $httpBackend.whenGET(/app\/([a-zA-Z]*\/)*[a-zA-Z]*.html/).respond(200);
});
