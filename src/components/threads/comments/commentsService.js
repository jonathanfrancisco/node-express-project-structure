/* eslint-disable no-underscore-dangle */
const httpErrors = require('http-errors')

const Thread = require('../../../models/Thread')

const commentsService = {}

commentsService.createComment = async (id, commentDetails) => {
  const comment = await Thread.findById(id)
  if (!comment) throw httpErrors.NotFound()
  await comment.comments.push(commentDetails)
  await comment.save()

  const thread = await Thread.findById(comment._id)
    .populate('author')
    .populate('comments.author')

  return {
    thread
  }
}

commentsService.updateComment = async (id, commentId, commentDetails) => {
  const thread = await Thread.findOne({ _id: id })
  if (!thread) throw httpErrors.NotFound('Thread id not found')

  const checkCommentId = await thread.comments.map(comment => {
    if (comment._id == commentId) {
      return true
    }
    return false
  })
  if (!checkCommentId[0]) throw httpErrors.NotFound('Comment id not found')

  thread.comments.id(commentId).comment = commentDetails.comment
  await thread.save()

  return {
    thread
  }
}

commentsService.deleteComment = async ids => {
  const { id, commentId } = ids

  const thread = await Thread.findById(id)

  if (!thread) throw httpErrors.NotFound('Thread id not found')

  const checkCommentId = await thread.comments.map(comment => {
    if (comment._id == commentId) {
      return true
    }
    return false
  })
  if (!checkCommentId[0]) throw httpErrors.NotFound('Comment id not found')

  await thread.comments.id(commentId).remove()
  await thread.save()

  return {
    thread
  }
}

module.exports = commentsService
