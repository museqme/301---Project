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

  // Strains.loadAll = data => {
  //   console.log(data)
    // Strains.all = data.map(name => new Strains(name));
  Strains.loadAll = rows => {
    Strains.all = rows[data].map(ele => new Strains(ele));
  };
    // });
  // };

  Strains.fetchAll = callback => {
    $.get('/strains')
    .then(
      results => {
        // console.log(results);
        Strains.loadAll(results);
        callback();
      }
    )
  };

<<<<<<< HEAD
=======
  // ---- Database Stuff -----



>>>>>>> 80c197ac5921d67c9e0f1d67bec96a47a436c8c4
  module.Strains = Strains;
})(app);
