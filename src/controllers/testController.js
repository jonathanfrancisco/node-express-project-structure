const testService = require('../services/testService')
const httpErrors = require('http-errors')
const validator = require('../controllers/validator')

const testController = {}

testController.decorateName = async (req, res) => {
  const { error, value } = validator.decorateName(req.body)
  if (error) throw httpErrors.BadRequest(error.details)

  const processedName = await testService.processName(value.name)
  res.json({
    output: processedName
  })
}

module.exports = testController
