'use strict';

$('#seedForm').submit(function(event) {
  event.preventDefault();
  var strainSearch = $('#strainSearch').val();
  localStorage.setItem('data', strainSearch);
  var searchReq = localStorage.getItem('data');
  console.log(searchReq);
  // return strainSearch

  let searchRequest = function(data) {
    console.log(data)
    var obj = data;
    var objToArr = Object.keys(obj).map(function(key) {return obj[key]});
    console.log(objToArr);
    var dataArr = objToArr[0];
    console.log(dataArr);
    let template = Handlebars.compile($('#strainResults').html())
    $('#strains').html(template({strain: dataArr}))
  };

  $.getJSON('/search/' + searchReq)
  .then(searchRequest, errorCallback);
});



    // let errorCallback = function(err) {
    //   console.error(err)
    // }
