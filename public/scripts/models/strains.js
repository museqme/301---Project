'use strict';

var app = app || {};

(function(module) {
  function Strains (data) {
    this.name = data.name;
    this.genetics.name = data.genetics.name;
    this.ucpc = data.ucpc;
    this.seedCompany.name = data.seedCompany.name;
  }

  Strains.all = [];

  Strains.prototype.toHtml = function() {
    let template = Handlebars.compile($('#strains-template').text());
    return template(this);
  };

  Strains.loadAll = rows => {
    Strains.all = rows[data].map(ele => new Strains(ele));
  };

  Strains.fetchAll = callback => {
    $.get('/strains')
    .then(
      results => {
        // console.log(results);
        Strains.loadAll(results);
        callback();
      }
    )
  };
  let next,prev;
  const successCallBack = function(info) {
    console.log(info);
    next = info.next;
    prev = info.previous;
  }
  const errorCallBack = function(err) {
    console.log(err);
  }

  $('#next').on('click', function(){
    $.getJSON(next)
    .then(successCallBack, errorCallBack);
  });

  $('#prev').on('click', function() {
    $.getJSON(prev)
    .then(successCallBack, errorCallBack)
  })
  module.Strains = Strains;
})(app);
