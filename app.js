const express = require('express');

const app = express();

module.exports = app;

app.get('/', (req, res, next) => {
  res.send(`hello world`);
});

app.get('/api/movies', (req, res, next) => {
  res.send(`hello world`);
});

app.get('/api/actors', (req, res, next) => {
  res.send(`hello world`);
});
