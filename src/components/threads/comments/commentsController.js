const { ObjectId } = require('mongoose').Types
const httpErrors = require('http-errors')
const schema = require('./commentsRequestSchema')
const validators = require('../../../utils/joiValidator')
const commentsService = require('./commentsService')

const commentController = {}

commentController.createComment = async (req, res) => {
  const { id } = req.params
  if (!ObjectId.isValid(id)) throw httpErrors.NotFound('ID not valid')
  const { error, value: validatedRequestBody } = validators(
    req.body,
    schema.createComment
  )
  if (error) throw httpErrors.BadRequest(error.details)

  const commentDetails = validatedRequestBody
  const comment = await commentsService.createComment(id, commentDetails)

  res.status(200).send(comment)
}

commentController.deleteComment = async (req, res) => {
  const { id, commentId } = req.params

  if (!ObjectId.isValid(id) && !ObjectId.isValid(commentId))
    throw httpErrors.NotFound('ID not valid')

  const comment = await commentsService.deleteComment(req.params)

  res.status(200).send(comment)
}

module.exports = commentController
