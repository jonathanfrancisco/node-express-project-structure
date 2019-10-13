const Joi = require('@hapi/joi')

const validators = {}

validators.decorateName = requestBody => {
  const schema = Joi.object({
    name: Joi.string().required()
  })
  return schema.validate(requestBody, {
    abortEarly: false
  })
}

module.exports = validators
