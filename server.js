'use strict';

// const pg = require('pg');
// const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
// const superagent = require('superagent');
const app = express();

// const conString = 'postgres://postgres:1234@localhost:5432/highlow';
// const client = new pg.Client(conString);
// client.connect();
// client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
// app.use(superagent());
app.use(express.static('public'));

function proxyCanApi(request, response) {
  console.log('Isaiah was here: proxyCanApi');
  console.log(request.headers)
  console.log('Routing CannabisReports request for stuff!');
  (requestProxy({
    url: `https://www.cannabisreports.com/api/v1.0/strains`,
    headers: {Authorization: `${process.env.X_API_KEY}`}
  }))(request, response);
}

  $.getJSON('//www.cannabisreports.com/api/v1.0/strains/search/' + strainSearch)
    .then(searchRequest, errorCallback);
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




// function proxyCanApiSeeds(request, response) {
//   console.log('Isaiah was here: proxyCanApiSeeds');
//   console.log(request.headers)
//   console.log('Routing CannabisReports request for stuff!');
//   (requestProxy({
//     url: `https://www.cannabisreports.com/api/v1.0/strains/search`,
//     headers: {Authorization: `${process.env.X_API_KEY}`}
//   }))(request, response);
// }


app.get('/strains', proxyCanApi);
app.get('/strains/search', proxyCanApi);

app.listen(PORT, function() {
  console.log(`'listening on PORT: ${PORT}'`)
})


// =============================================================================================
// =============================================================================================
// =============================================================================================
// =============================================================================================


// function loadStrains() {
//   client.query('SELECT COUNT(*) FROM strains')
//   .then(result => {
//     if(!parseInt(result.rows[0].count)) {
//       fs.get('https://www.cannabisreports.com/api/v1.0/strains', (err, fd) => {
//         JSON.parse(fd.toString()).forEach(ele => {
//           client.query(`
//             INSERT INTO
//             strains(ucpc, seedCompanies.ucpc, genetics)
//             SELECT ucpc, $1, $2
//             FROM seed-companies
//             WHERE name=$3;
//           `,
//             [ele.ucpc, ele.seedCompanies.ucpc, ele.genetics, ele.namee]
//           )
//           .catch(console.error);
//         })
//       })
//     }
//   })
// }
//
// function loadDB() {
//   client.query(`
//     CREATE TABLE IF NOT EXISTS
//     seed-companies (
//       ucpc SERIAL PRIMARY KEY REFERENCES seedCompany.ucpc
//       name VARCHAR(255) NOT NULL,
//       strains.count INTEGER,
//       strains VARCHAR (255)
//     );`
//   )
//   .then(loadStrains)
//   .catch(console.error);
//
//   client.query(`
//     CREATE TABLE IF NOT EXISTS
//     strains (
//       name VARCHAR(255) NOT NULL,
//       seedCompany.ucpc VARCHAR (255) NOT NULL,
//       genetics VARCHAR (500),
//     );`
//   )
//   .then(loadStrains)
//   .catch(console.error);
// }
