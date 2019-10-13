const httpErrors = require('http-errors')
const testService = require('../services/testService')
const validator = require('./validators')

const testController = {}

testController.decorateName = async (req, res) => {
  const { error, value } = validator.decorateName(req.body)
  if (error) throw httpErrors.BadRequest({ errors: error.details })

  const processedName = await testService.processName(value.name)
  res.json({
    output: processedName
  })
}

module.exports = testController
