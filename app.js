const express = require('express');
const {
  models: { Actor, Movie, Role },
} = require('./db');
const app = express();

module.exports = app;

app.get('/', (req, res, next) => {
  res.send(`hello world`);
});

app.get('/api/movies', async (req, res, next) => {
  res.send(await Movie.findAll());
});

app.get('/api/actors', async (req, res, next) => {
  res.send(await Actor.findAll());
});
