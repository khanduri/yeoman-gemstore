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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
