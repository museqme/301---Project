'use strict';

let sucessCallback = function(data) {
  console.log(data)
  var obj = data;
  var objToArr = Object.keys(obj).map(function(key) {return obj[key]});
  console.log(objToArr);
  var dataArr = objToArr[0];
  let template = Handlebars.compile($('#strains-template').html())
  $('#strains').html(template({strain: dataArr}))
}

const errorCallback = function(err) {
  console.error(err)
}

$.getJSON('/strains')
    .then(sucessCallback, errorCallback);
