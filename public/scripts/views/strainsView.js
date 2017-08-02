'use strict';
var app = app || {};

(function(module) {
  const strainsView = {};

  strainsView.initIndexPage = () => {
    // ---- Commented sections are possible filter functionality-----
    // $('#ajax-spinner').fadeOut();
    // $('#filters').fadeIn();
    app.Strains.all.forEach(strain => {
      $('#strains').append(strain.toHtml());
      // if($(`#category-filter option:contains("${strains.category}")`).length === 0) {
      //   $('#category-filter').append(strains.toHtml('#category-filter-template'));
      // }
      // if($(`#author-filter option:contains("${strains.author}")`).length === 0) {
      //   $('#author-filter').append(strains.toHtml('#author-filter-template'));
      // }
    });
  };

  app.Strains.fetchAll(strainsView.initIndexPage);
  module.strainsView = strainsView;
})(app);
