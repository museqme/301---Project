'use strict';
var app = app || {};

(function(module) {
  const aboutController = {};
  aboutController.index = () => {
    $('.nav').hide();
    $('#strains').hide();
  };

  module.aboutController = aboutController;
})(app);
