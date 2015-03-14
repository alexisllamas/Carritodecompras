'use strict';

/**
 * @ngdoc function
 * @name singleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the singleApp
 */
angular.module('singleApp').controller('MainCtrl', function ($scope) {

  	//initinializer
  	(function() {
    $scope.products = $scope.products || [
    	{
    		id: 1,
    		name: 'Cosa',
    		price: 15,
    		description: 'Holi, soy un producto'
    	},
    	{
    		id: 2,
    		name: 'Cosa',
    		price: 30,
    		description: 'Holi, soy un producto'
    	},
    	{
    		id: 3,
    		name: 'Cosa',
    		price: 23,
    		description: 'Holi, soy un producto'
    	},
    	{
    		id: 4,
    		name: 'Cosa',
    		price: 19,
    		description: 'Holi, soy un producto'
    	},
    	{
    		id: 5,
    		name: 'Cosa',
    		price: 12,
    		description: 'Holi, soy un producto'
    	},
    ];
	})();

  });
