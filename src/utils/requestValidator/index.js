module.exports = (data, schema) => {
  return schema.validate(data, {
    abortEarly: false
  })
}