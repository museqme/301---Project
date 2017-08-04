'use strict';
var app = app || {};

(function(module) {
  const houseController = {};
  houseController.index = () => {
    $('#weeds').hide();
    $('#about').hide();
    $('.nav').hide();
  }

  // $('.logo').show().siblings().hide();


  module.houseController = houseController;
})(app);
