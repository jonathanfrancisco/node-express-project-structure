const Joi = require('@hapi/joi')

module.exports.getTodos = requestData => {
  const schema = Joi.object({
    searchQuery: Joi.string().required()
  })
  return schema.validate(requestData, {
    abortEarly: false
  })
}
