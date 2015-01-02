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

    var gems = [
      {
        name: 'Dodecahedron',
        price: 2.95,
        soldOut: false,
        description: 'Some description'
      }, {
        name: 'Tetrahedron',
        price: 1.00,
        soldOut: true,
        description: 'Some tetra description'
      }, {
        name: 'Quadrahedron',
        price: 5.00,
        soldOut: false,
        description: 'Some tetra description'
      }
    ]

    $scope.products = gems;

  });
