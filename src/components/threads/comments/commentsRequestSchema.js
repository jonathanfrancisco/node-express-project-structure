const Joi = require('@hapi/joi')

const commentRequestSchema = {}

commentRequestSchema.createComment = Joi.object({
  comment: Joi.string().required(),
  author: Joi.string().required()
})

commentRequestSchema.updateComment = Joi.object({
  comment: Joi.string().required()
})

module.exports = commentRequestSchema
