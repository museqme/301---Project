'use strict';

const pg = require('pg');
const fs = require('fs');
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
  console.log('Routing CannabisReports request for', request.params[0]);
  (requestProxy({
    url: `https://www.cannabisreports.com/api/v1.0/strains`,
    headers: {
      beforeSend: function(origin) {
        origin.setRequestHeader('Accept', 'https://www.cannabisreports.com/api/v1.0/strains');
        origin.setRequestHeader('Authorization', 'X-API-Key', `${process.env.X_API_KEY}`);
        origin.send();
      }
    }
  }))(request, response);
}

app.get('/strains', proxyCanApi);

app.listen(PORT, function() {
  console.log(`'listening on PORT: ${PORT}'`)
})


// =============================================================================================
// =============================================================================================
// =============================================================================================
// =============================================================================================


function loadArticles() {
  client.query('SELECT COUNT(*) FROM articles')
  .then(result => {
    if(!parseInt(result.rows[0].count)) {
      fs.readFile('./public/data/hackerIpsum.json', (err, fd) => {
        JSON.parse(fd.toString()).forEach(ele => {
          client.query(`
            INSERT INTO
            articles(author_id, title, category, "publishedOn", body)
            SELECT author_id, $1, $2, $3, $4
            FROM authors
            WHERE author=$5;
          `,
            [ele.title, ele.category, ele.publishedOn, ele.body, ele.author]
          )
          .catch(console.error);
        })
      })
    }
  })
}

function loadDB() {
  client.query(`
    CREATE TABLE IF NOT EXISTS
    authors (
      author_id SERIAL PRIMARY KEY,
      author VARCHAR(255) UNIQUE NOT NULL,
      "authorUrl" VARCHAR (255)
    );`
  )
  .then(loadAuthors)
  .catch(console.error);

  client.query(`
    CREATE TABLE IF NOT EXISTS
    articles (
      article_id SERIAL PRIMARY KEY,
      author_id INTEGER NOT NULL REFERENCES authors(author_id),
      title VARCHAR(255) NOT NULL,
      category VARCHAR(20),
      "publishedOn" DATE,
      body TEXT NOT NULL
    );`
  )
  .then(loadArticles)
  .catch(console.error);
}
