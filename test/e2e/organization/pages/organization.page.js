"use strict";

var Organization = function () {
  browser.get("#/org/list");
};

Organization.prototype = Object.create({}, {
  repos: {get: function() {return element.all(by.css(".list-group .list-group-item")); }},
});

module.exports = Organization;