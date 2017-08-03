'use strict';
var app = app || {};

(function(module) {
  const strainsController = {};
  strainsController.index = () => {
    app.Strains.fetchAll(app.strainsView.initIndexPage);

    function hideSections() {
      $('.nav').hide();
      // $('#about').hide();
    }

    hideSections();
  };

  module.strainsController = strainsController;
})(app);
