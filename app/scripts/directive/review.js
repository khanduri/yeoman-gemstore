'use strict';

angular.module('gemstoreApp')
  .directive('templateReview', function(){
    return {
      restrict: 'E',
      templateUrl: 'views/template-review.html',
      controller: function(){
        this.review = {rating:5};

        this.addReview = function(product){
          product.reviews.push(this.review);
          this.review = {};
        }
      },
      controllerAs: 'reviewCtrl'
    }
  });
