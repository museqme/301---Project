'use strict';

var app = app || {};

(function(module) {
  function Strains(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  Strains.all = [];

  Strains.prototype.toHtml = function() {
    let template = Handlebars.compile($('#strains-template').text());
    return template(this);
  };

  Strains.loadAll = rows => {
    rows.sort();
    Strains.all = rows.map(ele => new Strains(ele));
  };

  Strains.fetchAll = callback => {
    $.get('/strains')
    .then(
      results => {
        Strains.loadAll(results);
        callback();
      }
    )
  };

  module.Strains = Strains;
})(app);
