'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};
  aboutController.index = () => {
    $('.nav').hide();
    $('#strains').hide();
    $('#about').show();
  };

  module.aboutController = aboutController;
})(app);
