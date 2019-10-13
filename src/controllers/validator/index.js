const Joi = require('@hapi/joi')

const validator = {}

validator.decorateName = requestBody => {
  const schema = Joi.object({
    name: Joi.string().required()
  })
  return schema.validate(requestBody, { abortEarly: false })
}

module.exports = validator
