'use strict';
var app = app || {};

(function(module) {
  const homeController = {};
  homeController.index = () => {
    $('#weeds').hide();
    $('#about').hide();
    $('.nav').show();
    $('#submitButton').on('click', function(event) {
      event.preventDefault();
      $('#weeds').show();
      $('.nav').hide();
      $('#about').hide();
    })
  };

  // $('.logo').show().siblings().hide();


  module.homeController = homeController;
})(app);
