'use strict';

describe('Controller: NavbarRouteCtrl', function () {

  // load the controller's module
  beforeEach(module('aw4App'));

  var NavbarRouteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NavbarRouteCtrl = $controller('NavbarRouteCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
