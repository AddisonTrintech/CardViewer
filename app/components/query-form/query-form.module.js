'use strict';
var queryForm = angular.module('queryForm', []);

queryForm.value('form', {
  name: '',
  subtype: '',
  set: '',
  colors: {},
  rarities: {
    common: false,
    uncommon: false,
    rare: false,
    mythic: false
  },
  types: {},
  supertypes: {},
  formats: {
    vintage: false,
    legacy: false,
    modern: false,
    standard: false,
    commander: false
  },
  statuses: {
    legal: false,
    banned: false,
    restricted: false
  }
});

queryForm.value('results', {cards: []});
