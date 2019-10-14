const httpErrors = require('http-errors')
const testService = require('../services/testService')
const validators = require('./validators')

const testController = {}

testController.decorateName = async (req, res) => {
  const { error, value } = validators.decorateName(req.body)
  if (error) throw httpErrors.BadRequest(error.details)

  const processedName = await testService.processName(value.name)
  res.json({
    output: processedName
  })
}

module.exports = testController
