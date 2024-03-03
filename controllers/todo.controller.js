const TodoModel = require('../model/todo.model.js')

exports.createTodo = async (req, res) => {
  try {
    const result = await TodoModel.create(req.body)
    res.status(201).json(result)
  } catch (error) {
    res.status(400).json(error)
  }
}
