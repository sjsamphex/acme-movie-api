const { expect } = require('chai');
const { syncAndSeed } = require('../db');

const app = require('supertest')(require('../app'));

describe('Routes', () => {
  describe('GET /', () => {
    it('show info about api', async () => {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
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
