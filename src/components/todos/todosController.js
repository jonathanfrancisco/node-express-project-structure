const httpErrors = require('http-errors')
const todosRequestValidator = require('./todosRequestValidator')
const todosService = require('./todosService')

const todosController = {}

todosController.getTodos = async (req, res) => {
  const { error, value: data } = todosRequestValidator.getTodos({
    searchQuery: req.query.searchQuery
  })
  if (error) {
    throw httpErrors.BadRequest(error.details)
  }

  const todos = await todosService.getTodos({
    searchQuery: data.searchQuery
  })
  return res.send(todos)
}

module.exports = Object.freeze(todosController)
