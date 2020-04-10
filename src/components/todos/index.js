const todosRouter = require('express').Router();
const todosController = require('./todosController');

todosRouter.post('/todos', todosController.addTodo);
todosRouter.get('/todos/:id', todosController.getTodoById);
todosRouter.get('/todos', todosController.getTodos);

module.exports = todosRouter;
