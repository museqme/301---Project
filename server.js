'use strict';


const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static('public'));

function proxyCanApi(request, response) {
  console.log('Isaiah was here: proxyCanApi');
  console.log(request.headers)
  console.log('Routing CannabisReports request for strains!');
  (requestProxy({
    url: `https://www.cannabisreports.com/api/v1.0/strains`,
    headers: {Authorization: `${process.env.X_API_KEY}`}
  }))(request, response);
}

function proxyCanApiSeeds(request, response) {
  console.log(request.params[0]);
  (requestProxy({
    url: `https://www.cannabisreports.com/api/v1.0/strains/search/${request.params[0]}`,
    headers: {Authorization: `${process.env.X_API_KEY}`}
  }))(request, response);
}

app.get('/strains', proxyCanApi);
app.get('/search/*', proxyCanApiSeeds);

app.listen(PORT, function() {
  console.log(`'listening on PORT: ${PORT}'`)
})
