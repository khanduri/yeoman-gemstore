'use strict';

/**
 * @ngdoc function
 * @name gemstoreApp.controller:ReviewCtrl
 * @description
 * # ReviewCtrl
 * Controller of the gemstoreApp
 */
angular.module('gemstoreApp')
  .controller('ReviewCtrl', function ($scope) {

    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    }

  });