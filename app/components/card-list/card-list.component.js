cardList.component('cardList', {
  restrict: 'E',
  templateUrl: 'app/components/card-list/card-list.template.html',
  controller: function() {
    var cardListCtrl = this;

    cardListCtrl.form = queryForm.queryFormCtrl.form;
  },
  controllerAs: 'cardListCtrl'
});
