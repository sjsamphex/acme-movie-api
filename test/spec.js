const { expect } = require('chai');

const app = require('supertest')(require('../app'));

describe('Routes', () => {
  describe('GET /', () => {
    it('show info about api', async () => {
      const response = await app.get('/');
      expect(response.status).to.equal(200);
    });
  });
});
