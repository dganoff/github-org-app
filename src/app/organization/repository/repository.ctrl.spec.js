"use strict";

module.exports = function (ngModule) {
  describe("RepositoryCtrl", function() {
    var ctrl,
        $controller;

    beforeEach(function() {
      window.module(ngModule.name);

      inject(function(_$injector_) {
        $controller = _$injector_.get("$controller");
      });

      ctrl = $controller("RepositoryCtrl", {
        commits: [],
        $stateParams: {
          repo: "something",
        }
      });
    });

    describe("initialization", function() {
      it("should receive the list of commits from the resolved 'commits' dependency", function() {
        expect(ctrl.commits).toBeDefined();
      });

      it("should get a Repository name from the $stateParams", function() {
        expect(ctrl.repoName).toEqual("something");
      });
    });
  });
};