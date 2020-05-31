const todosRouter = require('express').Router();
const { errors: catchValidationErrors } = require('celebrate');
const todosRequestSchema = require('./todosRequestSchema');
const todosController = require('./todosController');

todosRouter.post('/todos', todosRequestSchema.addTodo, todosController.addTodo);
todosRouter.get('/todos/:id', todosController.getTodoById);
todosRouter.get('/todos', todosController.getTodos);
todosRouter.use(catchValidationErrors()); // catch joi/celebrate validation errors

module.exports = todosRouter;
