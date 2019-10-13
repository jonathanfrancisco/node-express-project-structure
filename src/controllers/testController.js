const testService = require('../services/testService')

const testController = {}

testController.decorateName = async (req, res) => {
  const { name } = req.body
  const processedName = await testService.processName(name)
  res.json({
    output: processedName
  })
}

module.exports = testController
