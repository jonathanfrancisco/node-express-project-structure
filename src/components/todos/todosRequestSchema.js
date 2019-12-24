const Joi = require('@hapi/joi')

const todosRequestSchema = {}

todosRequestSchema.getTodos = Joi.object({
  body: {},
  query: {
    searchQuery: Joi.string().required()
  },
  params: {}
})

module.exports = Object.freeze(todosRequestSchema)
