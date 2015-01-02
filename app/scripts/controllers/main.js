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
        images: [
          'http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-01.gif'
        ],
        description: 'Some description'
      }, {
        name: 'Tetrahedron',
        price: 1.00,
        soldOut: true,
        images: [
          'http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-02.gif'
        ],
        description: 'Some tetra description'
      }, {
        name: 'Quadrahedron',
        price: 5.00,
        soldOut: false,
        images: [
          'http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-03.gif'
        ],
        description: 'Some tetra description'
      }
    ]

    $scope.products = gems;

  });
