'use strict';
var app = app || {};

(function(module) {
  const strainsView = {};

  strainsView.initIndexPage = () => {

    app.Strains.all.forEach(strain => {
      $('#strains').append(strain.toHtml());
    });
  };

  app.Strains.fetchAll(strainsView.initIndexPage);
  module.strainsView = strainsView;
})(app);
