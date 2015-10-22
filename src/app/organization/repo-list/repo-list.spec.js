"use strict";

var RepoList = require("./repo-list.js");

module.exports = function () {
  describe("<repo-list> Component", function() {
    var component,
        GithubService,
        $state;

    beforeEach(function() {
      GithubService = {
        getOrgRepos: function() {
          return {
            then: function(cb) {
              cb([
                {name: "first repo"},
                {name: "second repo"},
              ]);
            }
          };
        }
      };

      $state = {
        go: function(){},
      };

      component = new RepoList(GithubService, $state);
    });

    describe("getOrgRepos", function() {
      beforeEach(function() {
        spyOn(GithubService, "getOrgRepos").and.callThrough();
      });

      it("should call the service to get the Organization Repositories", function() {
        component.getOrgRepos("test org");
        expect(GithubService.getOrgRepos).toHaveBeenCalledWith("test org");
        expect(component.repos.length).toBeGreaterThan(0);
      });
    });

    describe("openRepo", function() {
      beforeEach(function() {
        spyOn($state, "go").and.callThrough();
      });

      it("should transition to the org.repo state with the correct params", function() {
        component.openRepo("some repo");
        expect($state.go).toHaveBeenCalledWith("org.repo", {repo: "some repo"});
      });
    });
  });
};