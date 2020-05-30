const todosRouter = require('express').Router();
const { errors: catchValidationErrors } = require('celebrate');
const { addTodoRequestSchema } = require('./todosRequestSchema');
const { addTodo, getTodoById, getTodos } = require('./todosController');

todosRouter.post('/todos', addTodoRequestSchema, addTodo);
todosRouter.get('/todos/:id', getTodoById);
todosRouter.get('/todos', getTodos);
todosRouter.use(catchValidationErrors()); // catch joi/celebrate validation errors

module.exports = todosRouter;
