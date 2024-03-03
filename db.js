const mongoose = require('mongoose')

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/todo-test-db?authSource=admin', {
      auth: { authSource: 'admin', username: 'root', password: 'example' },
    })
    console.log('Connected to mongodb')
  } catch (err) {
    console.error('Error connecting to mongodb')
    console.error(err)
  }
}

module.exports = { connect }
