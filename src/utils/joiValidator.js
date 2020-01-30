module.exports = (request, joiSchema) =>
  joiSchema.validate(
    {
      body: request.body,
      query: request.query
    },
    {
      abortEarly: false,
      errors: {
        label: 'key'
      }
    }
  )
