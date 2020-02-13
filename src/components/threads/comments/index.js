const commentsRouter = require('express').Router()
const commentsController = require('./commentsController')
const catchErrors = require('../../../hoc/catchErrors')

commentsRouter.post(
  '/threads/:id/comment',
  catchErrors(commentsController.createComment)
)
commentsRouter.delete(
  '/threads/:id/comment/:commentId',
  catchErrors(commentsController.deleteComment)
)

module.exports = commentsRouter
