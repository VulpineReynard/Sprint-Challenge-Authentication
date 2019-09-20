const Users = require('./users-model.js');
const db = require('../database/dbConfig.js');

describe('users model', () => {
  it('should set environment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing')
  })

  describe('add()', () => {
    it('should add a user to table', async () => {
      let exampleUser = { username: "millare", password: "password123" }
      // add a user
      await Users.add(exampleUser)

      let users = await db('test');

      // assert
      expect(users).toHaveLength(1);
    })
  })

  describe('findBy()', () => {
    it('should find user in array', async () => {
      let exampleUser = { username: "millare", password: "password123" }
      // search user
      await Users.findBy(exampleUser.username)

      const user = await db('users').where(exampleUser.username)

      // assert

    })
  })
})