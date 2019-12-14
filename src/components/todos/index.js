const todoRouter = require('express').Router()
const todosController = require('./todosController')
const catchErrors = require('../../hoc/catchErrors')

todoRouter.get('/todos', catchErrors(todosController.getTodos))

module.exports = Object.freeze(todoRouter)
