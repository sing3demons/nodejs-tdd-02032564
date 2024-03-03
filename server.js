const express = require('express')
const db = require('./db')

db.connect()
const app = express()
app.use(express.json())
const todoController = require('./controllers/todo.controller')

app.post('/api/todos', todoController.createTodo)

app.get('/', (req, res) => {
  res.json('Hello World!')
})

module.exports = app

// class Server {
//   static start = () => {
//     app.listen(3000, () => console.log('Example app listening on port 3000!'))
//   }
// }

// module.exports = Server
