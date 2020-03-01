const todosRouter = require('express').Router();
const { todosController } = require('../../components/todos');
const catchErrors = require('../../hoc/catchErrors');

todosRouter.get('/todos', catchErrors(todosController.getTodos));
todosRouter.get('/todos/:id', catchErrors(todosController.getTodoById));
todosRouter.post('/todos', catchErrors(todosController.createTodo));
todosRouter.delete('/todos', catchErrors(todosController.deleteTodos));
todosRouter.delete('/todos/:id', catchErrors(todosController.deleteTodoById));

module.exports = todosRouter;
