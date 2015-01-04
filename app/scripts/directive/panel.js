'use strict';

angular.module('gemstoreApp')
  .directive('templatePanel', function(){
    return {
      restrict: 'E',
      templateUrl: 'views/template-panel.html',
      controller: function(){
        this.panelTab = 1;

        this.setSelected = function(panelTab){
          this.panelTab = panelTab;
        }

        this.isSelected = function(panelTab){
          return this.panelTab === panelTab;
        }
      },
      controllerAs: 'panelCtrl'
    }
  });
