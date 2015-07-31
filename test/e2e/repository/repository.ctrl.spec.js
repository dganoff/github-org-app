"use strict";

var Repository = require("./pages/repository.page.js");

describe("Repository", function() {
  var page;

  beforeEach(function(){
    page = new Repository();
  });

  it("should display a list of commits", function() {
    expect(page.commits.count()).toBeGreaterThan(0);
  });
});