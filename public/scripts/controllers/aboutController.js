'use strict';
var app = app || {};
(function(module) {
  const aboutController = {};
  aboutController.index = () => {
    $('#loginSwap').hide();
    $('#logoSwap').show();
    $('#weeds').hide();
    $('#about').show();
    $('.mainNav').show();
  };
  module.aboutController = aboutController;
})(app);
