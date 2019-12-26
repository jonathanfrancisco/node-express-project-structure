const Joi = require('@hapi/joi')

const todosRequestSchema = {}

todosRequestSchema.getTodos = Joi.object({
  body: {},
  query: {}
})

todosRequestSchema.getTodoById = Joi.object({
  body: {},
  query: {}
})

todosRequestSchema.createTodo = Joi.object({
  body: {
    body: Joi.string().required()
  },
  query: {}
})

todosRequestSchema.deleteTodos = Joi.object({
  body: {},
  query: {}
})

todosRequestSchema.deleteTodoById = Joi.object({
  body: {},
  query: {}
})

module.exports = Object.freeze(todosRequestSchema)
