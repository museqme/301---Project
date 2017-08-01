'use strict';

var app = app || {};

(function(module) {
  const strains = {};
  strains.all = [];

  strains.requestRepos = function(callback) {
    $.ajax({
      url: 'https://www.cannabisreports.com/my/api',
      method: 'GET',
      headers: {
        Authorization: `token ${API_KEY}`
      }
    })
    .then(data => {
      return $.get(data.strains);
    })
    .then(data => {
      callback(null, data);
    })
    .catch(err => {
      callback(err);
      console.error('Failed to load strains: ', err);
    });
  };

  strains.requestRepos((err, data) => {
    if (err) console.log(err);
    strains.all = data;
    console.log('strains: ', strains.all);
  });

  strains.with = attr => strains.all.filter(name => name[attr]);

  module.strains = strains;
})(app);


// 'use strict';
// var app = app || {};
//
// (function(module) {
//   function Strains(rawDataObj) {
//     Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
//   }
//
//   Strains.all = [];
//
//   Strains.prototype.toHtml = function() {
//     let template = Handlebars.compile($('#strains-template').text());
//     return template(this);
//   };
//
//   Strains.loadAll = rows => {
//     rows.sort();
//     Strains.all = rows.map(ele => new Strains(ele));
//   };
//
//   Strains.fetchAll = callback => {
//     $.get('/strains')
//     .then(
//       results => {
//         Strains.loadAll(results);
//         callback();
//       }
//     )
//   };
//
//   module.Strains = Strains;
// })(app);
