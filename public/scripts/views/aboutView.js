'use strict';
var app = app || {};

(function(module) {
  const aboutView = {};

  aboutView.initIndexPage = () => {
    $('#strains').hide();
  }
  module.aboutView = aboutView;
})(app);
