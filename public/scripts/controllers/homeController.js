'use strict';
var app = app || {};

(function(module) {
  const homeController = {};
  homeController.index = () => {
    $('#weeds').hide();
    $('#about').hide();
    $('#logoSwap').hide();
    $('.mainNav').hide();
    $('#loginSwap').show();
    $('#submitButton').on('click', function(event) {
      event.preventDefault();
      $('#weeds').show();
      $('#logoSwap').fadeIn('slow');
      $('#loginSwap').hide();
      $('.mainNav').show();
      $('#topLogo').hide();
      $('#about').hide();
    })
  };

  // $('.logo').show().siblings().hide();


  module.homeController = homeController;
})(app);
