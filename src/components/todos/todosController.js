const httpErrors = require('http-errors')
const schema = require('./todosRequestSchema')
const validator = require('../../utils/joiValidator')
const todosService = require('./todosService')

const todosController = {}

todosController.getTodos = async (req, res) => {
  const { error, value: validatedRequest } = validator(req, schema.getTodos)
  if (error) throw httpErrors.BadRequest(error.details)

  const { searchQuery } = validatedRequest.query
  const todos = await todosService.getTodos(searchQuery)

  res.status(200).send(todos)
}

todosController.getTodoById = async (req, res) => {
  const { error, value: validatedRequest } = validator(req, schema.getTodoById)
  if (error) throw httpErrors.BadRequest(error.details)

  const { id } = req.params
  const todo = await todosService.getTodoById(id)

  res.status(200).send(todo)
}

todosController.createTodo = async (req, res) => {
  const { error, value: validatedRequest } = validator(req, schema.createTodo)
  if (error) throw httpErrors.BadRequest(error.details)

  const todoInfo = validatedRequest.body
  const todo = await todosService.createTodo(todoInfo)

  res.status(201).send(todo)
}

todosController.deleteTodos = async (req, res) => {
  const { error, value: validatedRequest } = validator(req, schema.deleteTodos)
  if (error) throw httpErrors.BadRequest(error.details)

  const todos = await todosService.deleteTodos()
  res.status(200).send(todos)
}

todosController.deleteTodoById = async (req, res) => {
  const { error, value: validatedRequest } = validator(
    req,
    schema.deleteTodoById
  )
  if (error) throw httpErrors.BadRequest(error.details)

  const { id } = req.params
  const todo = await todosService.deleteTodoById(id)

  res.status(200).send(todo)
}

module.exports = todosController
