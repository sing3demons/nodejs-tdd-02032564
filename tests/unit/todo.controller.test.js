const TodoController = require('../../controllers/todo.controller')
const TodoModel = require('../../model/todo.model')
const httpMocks = require('node-mocks-http')

const mockBody = require('../mock-data/new-todo.json')
TodoModel.create = jest.fn()

describe('TodoController.createTodo', () => {
  let req, res
  beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
  })

  it('should have a createTodo function', () => {
    expect(typeof TodoController.createTodo).toBe('function')
  })

  it('should call TodoModel.create', async () => {
    req.body = mockBody
    await TodoController.createTodo(req, res)
    expect(TodoModel.create).toBeCalledWith(mockBody)
  })

  it('should return 201 response code', async () => {
    req.body = mockBody
    await TodoController.createTodo(req, res)
    expect(res.statusCode).toBe(201)
    expect(res._isJSON()).toBeTruthy()
    expect(res._isEndCalled()).toBeTruthy()
  })
})
