module.exports = (request, joiSchema) => {
  return joiSchema.validate(
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
}
