'use strict';
var app = app || {};

(function(module) {
  const aboutView = {};

  aboutView.initIndexPage = () => {
    $('#weeds').hide();
  }
  module.aboutView = aboutView;
})(app);
