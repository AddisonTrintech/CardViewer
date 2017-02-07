cardList.component('cardList', {
  restrict: 'E',
  templateUrl: 'app/components/card-list/card-list.template.html',
  controller: function($http, results) {
    var cardListCtrl = this;
    cardListCtrl.results = results;
  },
  controllerAs: 'cardListCtrl'
});
