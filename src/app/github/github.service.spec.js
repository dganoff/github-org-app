"use strict";

export default function (ngModule) {
  describe("GithubService", function() {
    var service,
        $rootScope,
        $http;

    beforeEach(function() {
      window.module(ngModule.name);

      inject(function(_$injector_) {
        service = _$injector_.get("GithubService");
        $rootScope = _$injector_.get("$rootScope");
        $http = _$injector_.get("$http");
      });
    });

    describe("getOrgRepos", function() {
      beforeEach(function() {
        spyOn($http, "get").and.callFake(function() {
          return {
            success: function(cb) {
              cb([]);
              return { error: function() {} };
            },
          };
        });
      });

      it("should have a getOrgRepos method", function() {
        expect(service.getOrgRepos).toBeDefined();
      });

      it("should call the correct endpoint with the supplied Organization name", function() {
        var org = "netflix";
        service.getOrgRepos(org);
        $rootScope.$apply();
        expect($http.get).toHaveBeenCalledWith("https://api.github.com/orgs/" + org + "/repos");
      });
    });

    describe("setHeaders", function() {
      it("should have a setHeaders method", function() {
        expect(service.setHeaders).toBeDefined();
      });

      it("should set the Accept header to the v3 API", function() {
        service.setHeaders();
        expect($http.defaults.headers.common.Accept).toEqual("application/vnd.github.v3+json");
      });
    });

    describe("getRepoCommits", function() {
      beforeEach(function() {
        spyOn($http, "get").and.callFake(function() {
          return {
            success: function(cb) {
              cb([]);
              return { error: function() {} };
            },
          };
        });
      });

      it("should have a getRepoCommits method", function() {
        expect(service.getRepoCommits).toBeDefined();
      });

      it("should call the correct endpoint with the supplied Repository name", function() {
        var repoName = "something";
        service.getRepoCommits(repoName);
        $rootScope.$apply();
        expect($http.get).toHaveBeenCalledWith("https://api.github.com/repos/intridea/" + repoName + "/commits");
      });
    });
  });
}