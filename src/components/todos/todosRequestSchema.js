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
    body: Joi.string()
      .min(4)
      .max(100)
      .required()
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

module.exports = todosRequestSchema
