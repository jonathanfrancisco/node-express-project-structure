const { ObjectId } = require('mongoose').Types
const httpErrors = require('http-errors')
const validator = require('../../utils/joiValidator')
const schema = require('./threadsRequestSchema')
const threadsService = require('./threadsService')

const threadController = {}

threadController.createThread = async (req, res) => {
  const { author } = req.body

  const { error, value: validatedRequestBody } = validator(
    req.body,
    schema.createThread
  )
  if (!ObjectId.isValid(author)) throw httpErrors.NotFound()
  if (error) throw httpErrors.BadRequest(error.details)

  const threadDetails = validatedRequestBody
  const thread = await threadsService.createThread(threadDetails)

  res.status(200).send(thread)
}

threadController.getThreads = async (req, res) => {
  const threads = await threadsService.getThreads()

  res.status(200).send(threads)
}

threadController.getThreadById = async (req, res) => {
  const { id } = req.params
  if (!ObjectId.isValid(id)) throw httpErrors.NotFound('ID not valid')
  const thread = await threadsService.getThreadById(id)

  res.status(200).send(thread)
}

threadController.updateThread = async (req, res) => {
  const { id } = req.params

  const { error, value: validatedRequestBody } = validator(
    req.body,
    schema.updateThread
  )
  if (!ObjectId.isValid(id)) throw httpErrors.NotFound('ID not valid')
  if (error) throw httpErrors.BadRequest(error.details)

  const threadDetails = validatedRequestBody

  const thread = await threadsService.updateThread(id, threadDetails)

  res.status(200).send(thread)
}

threadController.deleteThread = async (req, res) => {
  const { id } = req.params

  if (!ObjectId.isValid(id)) throw httpErrors.NotFound('ID not valid')

  const thread = await threadsService.deleteThread(id)

  res.status(200).send(thread)
}
module.exports = threadController
