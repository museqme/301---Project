'use strict';
var app = app || {};

(function(module) {
  const homeView = {};

  homeView.initIndexPage = () => {
    $('#weeds').hide();
    $('#about').hide();
  }
  module.homeView = homeView;
})(app);
