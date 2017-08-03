'use strict';
let next, prev;

let sucessCallback = function(data) {
  console.log(data)
  var obj = data;
  var objToArr = Object.keys(obj).map(function(key) {return obj[key]});
  console.log(objToArr);
  var dataArr = objToArr[0];
  console.log(dataArr);
  var metaArray = objToArr[1];
  console.log(metaArray);
  var metaObjToArr = Object.keys(obj).map(function(key) {return obj[key]});
  console.log(metaObjToArr);
  let template = Handlebars.compile($('#strains-template').html())
  $('#strains').html(template({strain: dataArr}))
}

// var thing = function(data) {
//   var metaNext = data.meta.pagination.links.next;
//   var metaPrev = data.meta.pagination.links.previous;
//   console.log(metaNext, metaPrev);
//   next = metaNext;
//   console.log(metaNext)
//   prev = metaPrev;
// }

const errorCallback = function(err) {
  console.error(err)
}

$.getJSON('/strains')
    .then(sucessCallback, errorCallback);


// $('#next').on('click', function() {
//   $.getJSON('/strains')
//   .then(thing, errorCallback);
// })
//
// $('#prev').on('click', function() {
//   $.getJSON('/strains').then(thing, errorCallback)
// });

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
