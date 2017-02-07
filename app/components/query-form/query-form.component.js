'use strict';
queryForm.component('queryForm', {
  restrict: 'E',
  templateUrl: 'app/components/query-form/query-form.template.html',
  controller: function($http, form, results) {
    var queryFormCtrl = this;
    queryFormCtrl.form = form;
    queryFormCtrl.results = results;

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

    queryFormCtrl.submitForm = function() {
      var url = buildQueryURL(queryFormCtrl.form);
      $http.get(url).then(
        function success(response) { results.cards = response.data; },
        function failure(response) { results.cards = []; }
      );
    };
  },
  controllerAs: 'queryFormCtrl'
});

// Compile the form data into URL that can be used to query the Deckbrew API.
function buildQueryURL(form)
{
  var url = 'https://api.deckbrew.com/mtg/cards?';

  if(form.name.length > 0)
    url += `name=${form.name}&`;
  if(form.subtype.length > 0)
    url += `subtype=${form.subtype}&`;
  if(form.set.length > 0)
    url += `set=${form.set}&`;

  Object.keys(form.colors).forEach(function(color) {
    if(form.colors[color])
      url += `color=${color}&`;
  });

  Object.keys(form.rarities).forEach(function(rarity) {
    if(form.rarities[rarity])
      url += `rarity=${rarity}&`;
  });

  Object.keys(form.types).forEach(function(type) {
    if(form.types[type])
      url += `type=${type}&`;
  });

  Object.keys(form.supertypes).forEach(function(supertype) {
    if(form.supertypes[supertype])
      url += `supertype=${supertype}&`;
  });

  Object.keys(form.formats).forEach(function(format) {
    if(form.formats[format])
      url += `format=${format}&`;
  });

  Object.keys(form.statuses).forEach(function(status) {
    if(form.statuses[status])
      url += `status=${status}&`;
  });

  return url;
}
