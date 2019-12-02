const todoService = require('./todoService')

const todoController = {}

todoController.getTodos = async (req, res) => {
  const todos = await todoService.getTodos()
  return {
    todos
  }
}

module.exports = Object.freeze(todoController)
