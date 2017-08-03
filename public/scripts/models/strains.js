'use strict';

let sucessCallback = function(data) {
  console.log(data)
  var obj = data;
  var objToArr = Object.keys(obj).map(function(key) {return obj[key]});
  console.log(objToArr);
  var dataArr = objToArr[0];
  console.log(dataArr);
  let template = Handlebars.compile($('#strains-template').html())
  $('#strains').html(template({strain: dataArr}))
}

let errorCallback = function(err) {
  console.error(err)
}

$.getJSON('/strains')
    .then(sucessCallback, errorCallback);

// let hideAll = function() {
//   $('.logo').show().siblings().hide();
// }

// hideAll();
// --- The Below is the previous code ---

// var app = app || {};
//
// (function(module) {
//   function Strains (data) {
//     this.name = data.name;
//     this.genetics.name = data.genetics.name;
//     this.ucpc = data.ucpc;
//     this.seedCompany.name = data.seedCompany.name;
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
//     Strains.all = rows[data].map(ele => new Strains(ele));
//   };
//
//   Strains.fetchAll = callback => {
//     $.ajax()
//       results => {
//         // console.log(results);
//         Strains.loadAll(results);
//         callback();
//       }
//     )
//   };
//
//   module.Strains = Strains;
// })(app);
