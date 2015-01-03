'use strict';

/**
 * @ngdoc function
 * @name gemstoreApp.controller:PanelCtrl
 * @description
 * # PanelCtrl
 * Controller of the gemstoreApp
 */
angular.module('gemstoreApp')
  .controller('PanelCtrl', function ($scope) {

    this.panelTab = 1;

    this.setSelected = function(panelTab){
      this.panelTab = panelTab;
    }

    this.isSelected = function(panelTab){
      return this.panelTab === panelTab;
    }

  });
