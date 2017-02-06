'use strict';
var queryForm = angular.module('queryForm', []);

queryForm.value('form', {
  name: '',
  subtype: '',
  set: '',
  colors: [],
  rarities: [],
  types: [],
  supertypes: [],
  formats: [],
  statuses: []
});
