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
    body: Joi.string()
      .min(4)
      .max(100)
      .required()
      .messages({
        'string.base': 'Body should be a type of text',
        'string.min': 'Body minimum length should be 5 characters',
        'string.max': 'Body max length is up to 100 characters only',
        'string.empty': 'Body cannot be empty',
        'any.required': 'Body cannot be empty'
      })
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
