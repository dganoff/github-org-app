"use strict";

var Repository = function () {
  browser.get("#/org/repo/omniauth");
};

Repository.prototype = Object.create({}, {
  commits: {get: function() {return element.all(by.css(".list-group .list-group-item")); }},
});

module.exports = Repository;