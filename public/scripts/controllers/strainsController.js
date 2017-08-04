'use strict';
var app = app || {};

(function(module) {
  const strainsController = {};
  strainsController.index = () => {
    $('#loginSwap').hide();
    $('#logoSwap').show();
    $('#weeds').show();
    $('#about').hide();
    $('.mainNav').show();
  };

  module.strainsController = strainsController;
})(app);
