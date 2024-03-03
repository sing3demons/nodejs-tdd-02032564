const TodoController = require('../../controllers/todo.controller')
const TodoModel = require('../../model/todo.model')
const httpMocks = require('node-mocks-http')

const mockBody = require('../mock-data/new-todo.json')
TodoModel.create = jest.fn()

describe('TodoController.createTodo', () => {
  it('should have a createTodo function', () => {
    expect(typeof TodoController.createTodo).toBe('function')
  })

  it('should call TodoModel.create', async () => {
    const req = httpMocks.createRequest()
    const res = httpMocks.createResponse()
    req.body = mockBody
    await TodoController.createTodo(req, res)
    expect(TodoModel.create).toBeCalledWith(mockBody)
  })
})
