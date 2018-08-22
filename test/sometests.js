var expect    = require("chai").expect;
var assert    = require("chai").assert;
var pacman = require("../app/pacman");

describe("Package Manager", function() {
  describe("Circular Dependency Check", function() {
    it("throws an error with input that has circular dependencies", function() {
      var badDepencies = ['KittenService: ', 'Leetmeme: Cyberportal','Cyberportal: Ice', 'CamelCaser: KittenService', 'Fraudstream: ', 'Ice: Leetmeme'];
      expect(pacman.getPackageInstallString.bind(pacman, badDepencies)).to.throw('Dependencies create circular dependency for Leetmeme');
    });
  });
  describe("Good input test", function() {
    it("successfully returns properly ordered packages", function() {
      var goodDependencies = ['KittenService: CamelCaser', 'CamelCaser: '];
      expect(pacman.getPackageInstallString(goodDependencies)).to.equal("CamelCaser, KittenService");
    });
  });
});
