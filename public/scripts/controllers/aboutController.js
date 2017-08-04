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
//
// function hideSections() {
//   $('#hero').siblings().hide();
// }
// function navBar() {
//   $('nav').on('click', 'li', function() {
//     console.log($(this).find('a').attr('href'));
//     this.clicked;
//     if (this.clicked === true) {
//       $($(this).find('a').attr('href')).slideUp('slow') && $('#hero').slideDown('slow');
//       console.log('Hide!');
//       this.clicked = false;
//     } else {
//       console.log('click!');
//       $($(this).find('a').attr('href')).slideDown('slow').siblings().slideUp('slow');
//       this.clicked = true;
//     }
//   });
// }
// hideSections();
// navBar();
