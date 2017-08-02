'use strict';

const pg = require('pg');
// const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const app = express();
const conString = 'postgres://postgres:1234@localhost:5432/highlow';
// const conString = process.env.DATEBASE_URL;
const client = new pg.Client(conString);
client.connect();
client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

function proxyCanApi(request, response) {
  console.log("I just logged")
  console.log(request.headers)
  console.log('Routing CannabisReports request for', request.params[0]);
  var data = (requestProxy({
    url: `https://www.cannabisreports.com/api/v1.0/strains`,
    // headers: {
    //   // beforeSend: function(origin) {
    //     // origin.setRequestHeader('Accept', 'https://www.cannabisreports.com/api/v1.0/strains');
    //     // origin.setRequestHeader('Authorization', 'X-API-Key', `${process.env.X_API_KEY}`);
    //     // origin.send();
    //   }
    // }
  }))(request, response);
  JSON.parse(data).forEach(ele => {
    client.query(`
      INSERT INTO
      strains(ucpc, seedCompanies.ucpc, genetics)
      SELECT ucpc, $1, $2
      FROM seed-companies
      WHERE name=$3;
    `,
      [ele.title, ele.category, ele.publishedOn, ele.body, ele.author]
    )
    .catch(console.error);
}

app.get('/strains', proxyCanApi);


app.listen(PORT, function() {
  console.log(`'listening on PORT: ${PORT}'`)
})


// =============================================================================================
// =============================================================================================
// =============================================================================================
// =============================================================================================

//
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
//             [ele.title, ele.category, ele.publishedOn, ele.body, ele.author]
//           )
//           .catch(console.error);
//         })
//       })
//     }
//   })
// }

function loadDB() {
  client.query(`
    CREATE TABLE IF NOT EXISTS
    seed-companies (
      ucpc SERIAL PRIMARY KEY REFERENCES seedCompany.ucpc
      name VARCHAR(255) NOT NULL,
      strains.count INTEGER,
      strains VARCHAR (255)
    );`
  )
  // .then(loadStrains)
  .catch(console.error);

 client.query(`
    CREATE TABLE IF NOT EXISTS
    strains (
      name VARCHAR(255) NOT NULL,
      seedCompany.ucpc VARCHAR (255) NOT NULL,
      genetics VARCHAR (500),
    );`
  )
  // .then(loadStrains)
  .catch(console.error);
}

loadDB();
//
// function queryThree(author_id) {
//     client.query(
//       `INSERT INTO
//       articles(author_id, title, category, "publishedOn", body)
//       VALUES ($1, $2, $3, $4, $5);`,
//       [
//         author_id,
//         request.body.title,
//         request.body.category,
//         request.body.publishedOn,
//         request.body.body
//       ],
//       function(err) {
//         if (err) console.error(err);
//         response.send('insert complete');
//       }
//     );
//   }
// });
