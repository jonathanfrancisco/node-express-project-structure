const todosRouter = require('express').Router();
const catchErrors = require('../../hoc/catchErrors');
const todosController = require('./todosController');

todosRouter.post('/todos', catchErrors(todosController.addTodo));
todosRouter.get('/todos/:id', catchErrors(todosController.getTodoById));
todosRouter.get('/todos', catchErrors(todosController.getTodos));

module.exports = todosRouter;
