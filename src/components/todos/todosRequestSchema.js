const Joi = require('@hapi/joi')

const todosRequestSchema = {}

todosRequestSchema.getTodos = Joi.object({
  body: {},
  query: {},
  params: {}
})

todosRequestSchema.getTodoById = Joi.object({
  body: {},
  query: {},
  params: {}
})

todosRequestSchema.createTodo = Joi.object({
  body: {
    body: Joi.string().required()
  },
  query: {},
  params: {}
})

todosRequestSchema.deleteTodos = Joi.object({
  body: {},
  query: {},
  params: {}
})

todosRequestSchema.deleteTodoById = Joi.object({
  body: {},
  query: {},
  paams: {}
})

module.exports = Object.freeze(todosRequestSchema)
