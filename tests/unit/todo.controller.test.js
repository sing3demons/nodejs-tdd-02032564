const TodoController = require('../../controllers/todo.controller')
const TodoModel = require('../../model/todo.model')
const httpMocks = require('node-mocks-http')

const mockBody = require('../mock-data/new-todo.json')
TodoModel.create = jest.fn()

let req, res
beforeEach(() => {
  req = httpMocks.createRequest()
  res = httpMocks.createResponse()
})

describe('TodoController.createTodo', () => {
  beforeEach(() => {
    req.body = mockBody
  })
  it('should have a createTodo function', () => {
    expect(typeof TodoController.createTodo).toBe('function')
  })

  it('should call TodoModel.create', async () => {
    await TodoController.createTodo(req, res)
    expect(TodoModel.create).toBeCalledWith(mockBody)
  })

  it('should return 201 response code', async () => {
    await TodoController.createTodo(req, res)
    expect(res.statusCode).toBe(201)
    expect(res._isJSON()).toBeTruthy()
    expect(res._isEndCalled()).toBeTruthy()
  })

  it('should return json body in response', async () => {
    TodoModel.create.mockReturnValue(mockBody)
    await TodoController.createTodo(req, res)
    expect(res._getJSONData()).toStrictEqual(mockBody)
  })

  it('should handle errors', async () => {
    const errorMessage = { message: 'Done property missing' }
    const rejectedPromise = Promise.reject(errorMessage)
    TodoModel.create.mockReturnValue(rejectedPromise)
    await TodoController.createTodo(req, res)
    expect(res.statusCode).toBe(400)
    expect(res._isEndCalled()).toBeTruthy()
    expect(res._getJSONData()).toStrictEqual(errorMessage)
  })
})
