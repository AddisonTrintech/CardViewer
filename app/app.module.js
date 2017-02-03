'use strict';
var app = angular.module('cardViewerApp', ['queryForm', 'cardList']);

app.controller('TabController', function() {
  this.activeTab = 'query';

  this.setTab = function(tabName) {
    this.activeTab = tabName;
  };

  this.isActiveTab = function(tabName) {
    return tabName == this.activeTab;
  };
});
