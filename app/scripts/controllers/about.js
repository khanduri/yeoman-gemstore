'use strict';

/**
 * @ngdoc function
 * @name gemstoreApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gemstoreApp
 */
angular.module('gemstoreApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
