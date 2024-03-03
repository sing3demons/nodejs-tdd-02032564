const TodoModel = require('../model/todo.model.js')

exports.createTodo = async (req, res) => {
  const result = await TodoModel.create(req.body)
  res.status(201).json(result)
}
