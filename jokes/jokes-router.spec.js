const request = require('supertest');

const server = require('../api/server.js');

describe('jokes-router.js', () => {

  describe('GET /jokes', () => {
    it('should not work without JWT', () => {
      return request(server)
      .get('/api/jokes')
      .then(res => {
        expect(res.body).toEqual({ "message": "No credentials provided." })
      })
    })
  })
})