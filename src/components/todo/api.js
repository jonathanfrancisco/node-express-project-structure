const todoRouter = require('express').Router()
const todoController = require('./todoController')
const catchErrors = require('../../hoc/catchErrors')

todoRouter.get('/todos', catchErrors(todoController))

module.exports = Object.freeze(todoRouter)
