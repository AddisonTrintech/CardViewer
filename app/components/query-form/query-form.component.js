'use strict';
queryForm.component('queryForm', {
  restrict: 'E',
  templateUrl: 'app/components/query-form/query-form.template.html',
  controller: function($http, form) {
    var queryFormCtrl = this;
    queryFormCtrl.form = form;

    // Begin: Form parameters.
    queryFormCtrl.colors = [];
    queryFormCtrl.rarities = ['common', 'uncommon', 'rare', 'mythic'];
    queryFormCtrl.types = [];
    queryFormCtrl.supertypes = [];
    queryFormCtrl.formats = ['vintage', 'legacy', 'modern', 'standard', 'commander'];
    queryFormCtrl.statuses = ['legal', 'banned', 'restricted'];
    // End: Form parameters.

    // Begin: Service calls to get form information.
    $http.get('https://api.deckbrew.com/mtg/colors').then(
      function success(response) {
        queryFormCtrl.colors = response.data;
        queryFormCtrl.colors.forEach(function(color) {
          queryFormCtrl.form.colors[color] = false;
        });
      },
      function failure(response) {}
    );

    $http.get('https://api.deckbrew.com/mtg/types').then(
      function success(response) {
        queryFormCtrl.types = response.data;
        queryFormCtrl.types.forEach(function(type) {
          queryFormCtrl.form.types[type] = false;
        });
      },
      function failure(response) {}
    );

    $http.get('https://api.deckbrew.com/mtg/supertypes').then(
      function success(response) {
        queryFormCtrl.supertypes = response.data;
        queryFormCtrl.supertypes.forEach(function(supertype) {
          queryFormCtrl.form.supertypes[supertype] = false;
        });
      },
      function failure(reponse) {}
    );
    // End: Service calls to get form information.
  },
  controllerAs: 'queryFormCtrl'
});
