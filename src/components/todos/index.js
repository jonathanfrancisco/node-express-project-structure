const todoRouter = require('express').Router()
const catchErrors = require('../../hoc/catchErrors')
const todosController = require('./todosController')

todoRouter.get('/todos', catchErrors(todosController.getTodos))
todoRouter.get('/todos/:id', catchErrors(todosController.getTodoById))
todoRouter.post('/todos', catchErrors(todosController.createTodo))
todoRouter.delete('/todos', catchErrors(todosController.deleteTodos))
todoRouter.delete('/todos/:id', catchErrors(todosController.deleteTodoById))

module.exports = Object.freeze(todoRouter)
