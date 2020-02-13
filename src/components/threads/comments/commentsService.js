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

  return thread
}

commentsService.deleteComment = async ids => {
  const thread = await Thread.findById(ids.id)

  if (!thread) throw httpErrors.NotFound('Thread id not found')
  const commentsList = thread.comments

  let commentId = false
  await commentsList.map(comment => {
    if (comment._id == ids.commentId) {
      commentId = true
    }
  })
  if (commentId == false) throw httpErrors.NotFound('Comment id not found')

  await thread.comments.id(ids.commentId).remove()
  await thread.save()

  return thread
}

module.exports = commentsService
