"use strict";

var Organization = require("./pages/organization.page.js");

describe("Organization", function() {
  var page;

  beforeEach(function(){
    page = new Organization();
  });

  it("should display a list of repositories", function() {
    expect(page.repos.count()).toBeGreaterThan(0);
  });

  it("should navigate to the commits state when clicking a Repository", function() {
    page.repos.first().click();
    expect(browser.getLocationAbsUrl()).toMatch(/org\/repo\/[a-zA-Z]*/);
  });

  it("should sort the list of repositories", function() {
    var repeatExp = page.repos.first().getAttribute("ng-repeat");
    expect(repeatExp).toMatch(/orderBy: vm.sort : true/);
  });
});