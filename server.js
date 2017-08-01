'use strict';

// const pg = require('pg');
// const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const app = express();
// const conString = 'postgres://USERNAME:PASSWORD@HOST:PORT';
// const conString = process.env.DATEBASE_URL;
// const client = new pg.Client(conString);
// client.connect();
// client.on('error', err => console.error(err));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

function proxyCanApi(request, response) {
  console.log('Routing CannabisReports request for', request.params[0]);
  (requestProxy({
    url: `https://www.cannabisreports.com/my/api${request.params[0]}`,
    headers: {Authorization: `key ${process.env.API_KEY}`}
  }))(request, response);
}

app.get('/strains/*', proxyCanApi);

app.listen(PORT, function() {
  console.log(`'listening on PORT: ${PORT}'`)
})
