import { Router } from 'express';
import { errors as catchValidationErrors } from 'celebrate';
import { addTodoRequestSchema } from './todosRequestSchema';
import { addTodo, getTodoById, getTodos } from './todosController';
import catchErrors from '../../middlewares/catchErrors';

const todosRouter = Router();
todosRouter.post('/todos', addTodoRequestSchema, catchErrors(addTodo));
todosRouter.get('/todos/:id', catchErrors(getTodoById));
todosRouter.get('/todos', catchErrors(getTodos));
todosRouter.use(catchValidationErrors()); // catch joi/celebrate validation errors

export default todosRouter;
