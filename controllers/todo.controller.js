const TodoModel = require('../model/todo.model.js')

exports.createTodo = async (req, res) => {
  await TodoModel.create(req.body)
}
