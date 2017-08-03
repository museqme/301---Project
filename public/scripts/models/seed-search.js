'use strict';

$('#seedForm').submit(function(event) {
  event.preventDefault();
  var strainSearch = $('#strainSearch').val();
  console.log(strainSearch);
  // return strainSearch
  return strainSearch();
});
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
    let errorCallback = function(err) {
      console.error(err)
    }
    $.getJSON('https://www.cannabisreports.com/api/v1.0/strains/search/' + strainSearch)
    .then(searchRequest(strainSearch), errorCallback);
