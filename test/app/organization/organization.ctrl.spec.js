(function() {
  "use strict";

  describe("OrganizationCtrl", function() {
    var ctrl,
        GithubService;

    beforeEach(function() {
      inject(function(_$injector_) {
        GithubService = _$injector_.get("GithubService");
      });
      ctrl = $controller("OrganizationCtrl");
    });

    describe("getOrgRepos", function() {
      beforeEach(function() {
        spyOn(GithubService, "getOrgRepos").and.callFake(function() {
          var deferred = $q.defer();
          deferred.resolve([]);
          return deferred.promise;
        });

        $httpBackend.whenGET(/https:\/\/api.github.com\/([a-zA-Z]*\/)*[a-zA-Z]*/).respond(200);
      });

      it("should call the service to get the Organization Repositories", function() {
        ctrl.getOrgRepos();
        $rootScope.$apply();
        expect(GithubService.getOrgRepos).toHaveBeenCalled();
      });
    });
  });
}());