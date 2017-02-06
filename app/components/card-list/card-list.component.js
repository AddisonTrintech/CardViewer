cardList.component('cardList', {
  restrict: 'E',
  templateUrl: 'app/components/card-list/card-list.template.html',
  controller: function(form) {
    var cardListCtrl = this;
    cardListCtrl.form = form;
  },
  controllerAs: 'cardListCtrl'
});
