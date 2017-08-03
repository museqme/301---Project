'use strict';
var app = app || {};

(function(module) {
  const homeController = {};

  homeController.index = () => {
    $('#strains').hide();
    $('#about').hide();
    $('.nav').show();
  };

  submitButton = () => {
    $('#submitButton').submit(function(event) {
      event.preventDefault();
      $('#strains').show();
      $('.logo').hide();
    })};

  // $('.logo').show().siblings().hide();


  module.homeController = homeController;
})(app);
