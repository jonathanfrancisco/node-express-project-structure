module.exports = (request, joiSchema) =>
  joiSchema.validate(
    {
      body: request.body,
      query: request.query,
      params: request.params
    },
    {
      abortEarly: false,
      errors: {
        label: 'key'
      }
    }
  )
