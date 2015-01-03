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
        reviews:[
          {
            rating: 3,
            body: 'this is ok',
            author: 'u1'
          }, {
            rating: 4,
            body: 'this is good',
            author: 'u2'
          }
        ],
        description: 'Some description'
      }, {
        name: 'Tetrahedron',
        price: 1.00,
        soldOut: true,
        images: [
          'http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-02.gif'
        ],
        reviews:[
          {
            rating: 1,
            body: 'this is something really long .. and long ',
            author: 'u3'
          }
        ],
        description: 'Some tetra description'
      }, {
        name: 'Quadrahedron',
        price: 5.00,
        soldOut: false,
        images: [
          'http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-03.gif'
        ],
        description: 'Some Quadra description'
      }
    ]

    $scope.products = gems;

  });
