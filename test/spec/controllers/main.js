'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('singleApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should have 5 products', function() {
    expect(scope.products.length).toBe(5);
  });

  it('should be object', function(){
    scope.products.forEach(function(p){
      expect(p).toEqual(jasmine.any(Object));
    })
  })

  it('should have a price', function() {
    scope.products.forEach(function(p){
      expect(p.price).toBeGreaterThan(0);
    });
  });

  it('should have a decription', function() {
    scope.products.forEach(function(p){
      expect(p.description).toBeDefined();
    });
  });

  it('should have a product name', function() {
    scope.products.forEach(function(p){
      expect(p.name).toBeDefined();
    });  
  });

  it('should have a product id', function() {
    scope.products.forEach(function(p){
      expect(p.id).toBeDefined();
    });
  });
});