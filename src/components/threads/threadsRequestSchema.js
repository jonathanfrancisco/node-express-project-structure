const Joi = require('@hapi/joi')

const threadsRequestSchema = {}

threadsRequestSchema.createThread = Joi.object({
  content: Joi.string().required(),
  author: Joi.string().required()
})

threadsRequestSchema.updateThread = Joi.object({
  content: Joi.string().required()
})

module.exports = threadsRequestSchema
