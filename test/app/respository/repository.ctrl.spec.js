(function() {
  "use strict";

  describe("RepositoryCtrl", function() {
    var ctrl;

    beforeEach(function() {
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
}());