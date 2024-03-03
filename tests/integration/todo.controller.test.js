const request = require('supertest')

const app = require('../../server')
const newTodo = require('../mock-data/new-todo.json')

const endpoint = '/api/todos/'

describe('TodoController', () => {
  it('post', async () => {
    const response = await request(app).post(endpoint).send(newTodo)
    expect(response.statusCode).toBe(201)
    expect(response.body.title).toBe(newTodo.title)
    expect(response.body.done).toBe(newTodo.done)
  })

})
