'use strict';

let sucessCallback = function(data) {
  console.log(data)
  var obj = data;
  var objToArr = Object.keys(obj).map(function(key) {return obj[key]});
  console.log(objToArr);
  var dataArr = objToArr[0];
  let template = Handlebars.compile($('#strains-template').html())
  $('#strains').html(template({strain: dataArr}))

  var metaObjNext = objToArr[1].pagination.links.next;
  localStorage.setItem('next', metaObjNext);
  var next = localStorage.getItem('next');
  console.log(next);

  var metaObjPrev = objToArr[1].pagination.links.previous;
  localStorage.setItem('prev', metaObjPrev);
  var prev = localStorage.getItem('prev');
  console.log(prev);
}

$('#next').on('click', function() {
  var next = localStorage.getItem('next');
  $.getJSON(next)
  .then(sucessCallback, errorCallback);
})

$('#prev').on('click', function() {
  var prev = localStorage.getItem('prev');
  $.getJSON(prev)
  .then(sucessCallback, errorCallback);
})

const errorCallback = function(err) {
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
