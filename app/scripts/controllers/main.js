'use strict';

/**
 * @ngdoc function
 * @name gemstoreApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gemstoreApp
 */
angular.module('gemstoreApp')
  .controller('MainCtrl', function ($scope) {

    var gem1 = {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'Some description'
    }
    var gem2 = {
      name: 'Tetrahedron',
      price: 1.00,
      description: 'Some tetra description'
    }

    $scope.products = [gem1, gem2];

  });
