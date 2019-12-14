const Joi = require('@hapi/joi')

module.exports = {
  getTodos: Joi.object({
    body: {},
    query: {
      searchQuery: Joi.string().required()
    },
    params: {}
  })
}
