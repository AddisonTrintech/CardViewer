'use strict';
queryForm.component('queryForm', {
  restrict: 'E',
  templateUrl: 'app/components/query-form/query-form.template.html',
  controller: function($http) {
    var queryFormCtrl = this;

    // Begin: Form model.
    queryFormCtrl.form = {
      name: '',
      subtype: '',
      set: '',
      colors: [],
      rarities: [],
      types: [],
      supertypes: [],
      formats: [],
      statuses: []
    };
    // End: Form model.

    // Begin: Form parameters.
    queryFormCtrl.colors = [];
    queryFormCtrl.colorIndex = [];

    queryFormCtrl.rarities = ['common', 'uncommon', 'rare', 'mythic'];
    queryFormCtrl.rarityIndex = [0, 1, 2, 3];

    queryFormCtrl.types = [];
    queryFormCtrl.typeIndex = [];

    queryFormCtrl.supertypes = [];
    queryFormCtrl.supertypeIndex = [];

    queryFormCtrl.formats = ['vintage', 'legacy', 'modern', 'standard', 'commander'];
    queryFormCtrl.formatIndex = [0, 1, 2, 3, 4];

    queryFormCtrl.statuses = ['legal', 'banned', 'restricted'];
    queryFormCtrl.statusIndex = [0, 1, 2];
    // End: Form parameters.

    // Begin: Service calls to get form information.
    $http.get('https://api.deckbrew.com/mtg/colors').then(
      function success(response) {
        queryFormCtrl.colors = response.data;
        for(var i = 0; i < queryFormCtrl.colors.length; i++)
          queryFormCtrl.colorIndex.push(i);
      },
      function failure(response) {}
    );

    $http.get('https://api.deckbrew.com/mtg/types').then(
      function success(response) {
        queryFormCtrl.types = response.data;
        for(var i = 0; i < queryFormCtrl.types.length; i++)
          queryFormCtrl.typeIndex.push(i);
      },
      function failure(response) {}
    );

    $http.get('https://api.deckbrew.com/mtg/supertypes').then(
      function success(response) {
        queryFormCtrl.supertypes = response.data;
        for(var i = 0; i < queryFormCtrl.supertypes.length; i++)
          queryFormCtrl.supertypeIndex.push(i);
      },
      function failure(reponse) {}
    );
    // End: Service calls to get form information.
  },
  controllerAs: 'queryFormCtrl'
});
