const TodoModel = require('../model/todo.model.js')

exports.createTodo = async () => {
  await TodoModel.create()
}
