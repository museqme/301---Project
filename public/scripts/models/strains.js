'use strict';

var app = app || {};

(function(module) {
  function Strains (data) {
    this.name = data.name;
    this.genetics.name = data.genetics.name;
    this.ucpc = data.ucpc;
    this.seedCompany.name = data.seedCompany.name;
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
