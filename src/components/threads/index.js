const threadRouter = require('express').Router()
const threadController = require('./threadsController')
const catchErrors = require('../../hoc/catchErrors')

threadRouter.post('/threads', catchErrors(threadController.createThread))
threadRouter.get('/threads', catchErrors(threadController.getThreads))
threadRouter.get('/threads/:id', catchErrors(threadController.getThreadById))
threadRouter.put('/threads/:id', catchErrors(threadController.updateThread))
threadRouter.delete('/threads/:id', catchErrors(threadController.deleteThread))

module.exports = threadRouter
