'use strict';
var app = app || {};

(function(module) {
  const homeView = {};

  homeView.initIndexPage = () => {
    $('#strains').hide();
    $('#about').hide();
  }
  module.homeView = homeView;
})(app);
