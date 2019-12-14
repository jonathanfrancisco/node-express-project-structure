const httpErrors = require('http-errors')
const validate = require('../../utils/joiValidator')
const schema = require('./todosRequestSchema')
const todosService = require('./todosService')

const todosController = {}

todosController.getTodos = async (req, res) => {
  const { error, value: validRequest } = validate(req, schema.getTodos)
  if (error) throw httpErrors.BadRequest(error.details)

  const { searchQuery } = validRequest

  const todos = await todosService.getTodos({
    searchQuery
  })
  return res.send({
    todos
  })
}

module.exports = Object.freeze(todosController)
