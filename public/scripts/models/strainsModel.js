'use strict';

var app = app || {};

(function(module) {
  const strains = {};
  strains.all = [];

  strains.requestStrains = function(callback) {
    $.get('/strains')
    .then(data => {
      console.log(data);
      callback(null, data);
    })
    .catch(err => {
      callback(err);
      console.error('Failed to load strains: ', err);
    });
  };

  strains.with = attr => strains.all.filter(name => name[attr]);

  module.strains = strains;
})(app);
