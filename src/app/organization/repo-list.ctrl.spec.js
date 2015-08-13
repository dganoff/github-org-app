"use strict";

module.exports = function (ngModule) {
  describe("RepoListCtrl", function() {
    var ctrl,
        $controller,
        GithubService,
        $rootScope,
        $httpBackend,
        $q,
        $state;

    beforeEach(function() {
      window.module(ngModule.name);

      inject(function(_$injector_) {
        GithubService = _$injector_.get("GithubService");
        $controller = _$injector_.get("$controller");
        $rootScope = _$injector_.get("$rootScope");
        $httpBackend = _$injector_.get("$httpBackend");
        $q = _$injector_.get("$q");
        $state = _$injector_.get("$state");
      });
      ctrl = $controller("RepoListCtrl");
    });

    describe("getOrgRepos", function() {
      beforeEach(function() {
        spyOn(GithubService, "getOrgRepos").and.callFake(function() {
          var deferred = $q.defer();
          deferred.resolve([
            {name: "first repo"},
            {name: "second repo"},
          ]);
          return deferred.promise;
        });

        $httpBackend.whenGET(/https:\/\/api.github.com\/([a-zA-Z]*\/)*[a-zA-Z]*/).respond(200);
      });

      it("should call the service to get the Organization Repositories", function() {
        ctrl.getOrgRepos();
        $rootScope.$apply();
        expect(GithubService.getOrgRepos).toHaveBeenCalled();
        expect(ctrl.repos.length).toBeGreaterThan(0);
      });

      it("should show the loading indicator when loading the Repositories", function() {
        ctrl.getOrgRepos();
        expect(ctrl.isLoadingRepos).toBe(true, "while loading initially");
        $rootScope.$apply();
        expect(ctrl.isLoadingRepos).toBe(false, "after loading");
      });
    });

    describe("openRepo", function() {
      beforeEach(function() {
        spyOn($state, "go").and.callThrough();
      });

      it("should transition to the org.repo state with the correct params", function() {
        ctrl.openRepo("some repo");
        expect($state.go).toHaveBeenCalledWith("org.repo", {repo: "some repo"});
      });
    });
  });
};