import { Router } from 'express';
import { errors as catchValidationErrors } from 'celebrate';
import todosRequestSchema from './todosRequestSchema';
import todosController from './todosController';
import catchErrors from '../../middlewares/catchErrors';

const todosRouter = Router();
todosRouter.post(
  '/todos',
  todosRequestSchema.addTodo,
  catchErrors(todosController.addTodo)
);
todosRouter.get('/todos/:id', catchErrors(todosController.getTodoById));
todosRouter.get('/todos', catchErrors(todosController.getTodos));
todosRouter.use(catchValidationErrors()); // catch joi/celebrate validation errors

export default todosRouter;
