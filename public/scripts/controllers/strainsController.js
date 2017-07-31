'use strict';
var app = app || {};

(function(module) {
  const strainsController = {};
  strainsController.index = () => {
    app.strains.fetchAll(app.strainsView.initIndexPage);

    $('#strains').show().siblings().hide();
  };

  module.strainsController = strainsController;
})(app);
