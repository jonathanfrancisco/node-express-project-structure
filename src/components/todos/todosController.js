const httpErrors = require('http-errors')
const schema = require('./todosRequestSchema')
const validator = require('../../utils/joiValidator')

module.exports = ({ todosService }) => {
  const todosController = {}

  todosController.getTodos = async (req, res) => {
    const { error, value: validatedRequest } = validator(req, schema.getTodos)
    if (error) throw httpErrors.BadRequest(error.details)

    const { searchQuery } = validatedRequest.query
    const todos = await todosService.getTodos({
      searchQuery
    })

    res.send(todos)
  }

  todosController.getTodoById = async (req, res) => {
    const { error, value: validatedRequest } = validator(req, schema.getTodos)
    if (error) throw httpErrors.BadRequest(error.details)

    const { id } = validatedRequest.params
    const todo = await todosService.getTodoById({ id })

    res.send(todo)
  }

  todosController.createTodo = async (req, res) => {
    const { error, value: validatedRequest } = validator(req, schema.createTodo)
    if (error) throw httpErrors.BadRequest(error.details)

    const { body } = validatedRequest.body
    const todo = await todosService.createTodo({ body })

    res.send(todo)
  }

  todosController.deleteTodos = async (req, res) => {
    const { error, value: validatedRequest } = validator(
      req,
      schema.deleteTodos
    )
    if (error) throw httpErrors.BadRequest(error.details)

    const todos = await todosService.deleteTodos()
    res.send(todos)
  }

  todosController.deleteTodoById = async (req, res) => {
    const { error, value: validatedRequest } = validator(
      req,
      schema.deleteTodoById
    )
    if (error) throw httpErrors.BadRequest(error.details)

    const { id } = validatedRequest.params
    const todo = await todosService.deleteTodoById({ id })
    res.send(todo)
  }

  return Object.freeze(todosController)
}
