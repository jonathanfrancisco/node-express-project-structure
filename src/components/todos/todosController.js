const httpErrors = require('http-errors')
const validate = require('../../utils/joiValidator')
const schema = require('./todosRequestSchema')
const todosService = require('./todosService')

const todosController = {}

todosController.getTodos = async (req, res) => {
  const { error, value: validRequest } = validate(req, schema.getTodos)
  if (error) throw httpErrors.BadRequest(error.details)

  const { searchQuery } = validRequest.query

  const todos = await todosService.getTodos({
    searchQuery
  })
  res.send(todos)
}

todosController.getTodoById = async (req, res) => {
  const { error, value: validRequest } = validate(req, schema.getTodos)
  if (error) throw httpErrors.BadRequest(error.details)

  const { id } = validRequest.params

  const todo = await todosService.getTodoById({ id })
  res.send(todo)
}

todosController.createTodo = async (req, res) => {
  const { error, value: validRequest } = validate(req, schema.createTodo)
  if (error) throw httpErrors.BadRequest(error.details)

  const { body } = validRequest.body

  const todo = await todosService.createTodo({ body })
  res.send(todo)
}

todosController.deleteTodos = async (req, res) => {
  const { error, value: validRequest } = validate(req, schema.deleteTodos)
  if (error) throw httpErrors.BadRequest(error.details)

  const todos = await todosService.deleteTodos()
  res.send(todos)
}

todosController.deleteTodoById = async (req, res) => {
  const { error, value: validRequest } = validate(req, schema.deleteTodoById)
  if (error) throw httpErrors.BadRequest(error.details)

  const { id } = validRequest.params

  const todo = await todosService.deleteTodoById({ id })
  res.send(todo)
}

module.exports = Object.freeze(todosController)
