'use strict';
var app = app || {};

(function(module) {
  const homeController = {};
  homeController.index = () => {
    $('#strains').hide();
    $('#about').hide();
    $('.nav').show();
  };

  module.homeController = homeController;
})(app);
