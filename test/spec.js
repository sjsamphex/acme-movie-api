const { expect } = require('chai');
const { syncAndSeed } = require('../db');

const app = require('supertest')(require('../app'));

describe('Routes', () => {
  before(() => syncAndSeed());
  describe('GET /', () => {
    it('show info about api', async () => {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
    });
  });
  describe('GET /api/movies', () => {
    it('show info about api', async () => {
      const response = await app.get('/api/movies');
      expect(response.status).to.equal(200);
      expect(response.body.length).to.equal(4);
    });
  });
  describe('GET /api/actors', () => {
    it('show info about api', async () => {
      const response = await app.get('/api/actors');
      // console.log(response.body);
      expect(response.body.length).to.equal(5);
    });
  });
});

describe('Database', () => {
  before(() => syncAndSeed());
  describe('will syncandseed', () => {
    it('show info about api', async () => {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
    });
  });
});
