'use strict';
queryForm.component('queryForm', {
  restrict: 'E',
  templateUrl: 'app/components/query-form/query-form.template.html',
  controller: function($http) {
    var queryFormCtrl = this;

    // Begin: Checkbox parameters.
    $http.get('https://api.deckbrew.com/mtg/colors').then(
      function success(response) { queryFormCtrl.colors = response.data; },
      function failure(response) { queryFormCtrl.colors = [] }
    );

    queryFormCtrl.rarities = ['common', 'uncommon', 'rare', 'mythic'];

    $http.get('https://api.deckbrew.com/mtg/types').then(
      function success(response) { queryFormCtrl.types = response.data; },
      function failure(response) { queryFormCtrl.types = [] }
    );

    queryFormCtrl.formats = ['vintage', 'legacy', 'modern', 'standard', 'commander'];

    queryFormCtrl.statuses = ['legal', 'banned', 'restricted'];
    // End: Checkbox parameters.

    // Begin:

  },
  controllerAs: 'queryFormCtrl'
});
