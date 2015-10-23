"use strict";

export default function (ngModule) {
  describe("<repo-list> Directive", function() {
    var ctrl,
        GithubService,
        $controller,
        $state;

    beforeEach(function() {
      window.module(ngModule.name);

      inject(function(_$injector_) {
        GithubService = _$injector_.get("GithubService");
        $state = _$injector_.get("$state");
        $controller = _$injector_.get("$controller");
      });

      ctrl = $controller("RepoListCtrl");
    });

    describe("getOrgRepos", function() {
      beforeEach(function() {
        spyOn(GithubService, "getOrgRepos").and.callFake(function() {
          return {
            then: function(cb) {
              cb([
                {name: "first repo"},
                {name: "second repo"},
              ]);
            }
          };
        });
      });

      it("should call the service to get the Organization Repositories", function() {
        ctrl.getOrgRepos("test org");
        expect(GithubService.getOrgRepos).toHaveBeenCalledWith("test org");
        expect(ctrl.repos.length).toBeGreaterThan(0);
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
}