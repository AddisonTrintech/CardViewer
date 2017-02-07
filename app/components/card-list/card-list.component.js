cardList.component('cardList', {
  restrict: 'E',
  templateUrl: 'app/components/card-list/card-list.template.html',
  controller: function(form) {
    var cardListCtrl = this;
    cardListCtrl.form = form;
    cardListCtrl.buildQueryURL = buildQueryURL;
  },
  controllerAs: 'cardListCtrl'
});

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
