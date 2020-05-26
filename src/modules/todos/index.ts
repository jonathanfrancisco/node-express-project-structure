import { Router } from 'express';
import {
  celebrate,
  Joi,
  errors as catchValidationErrors,
  Segments
} from 'celebrate';
import { addTodo, getTodoById, getTodos } from './todosController';
import catchErrors from '../../middlewares/catchErrors';

const todosRouter = Router();
const validator: { [route: string]: any } = {
  '/todos': celebrate(
    {
      [Segments.BODY]: Joi.object().keys({
        body: Joi.string()
          .min(4)
          .max(100)
          .required()
      })
    },
    { abortEarly: false }
  )
};

todosRouter.post('/todos', validator['/todos'], catchErrors(addTodo));
todosRouter.get('/todos/:id', catchErrors(getTodoById));
todosRouter.get('/todos', catchErrors(getTodos));
// TodosRouter.use(catchValidationErrors()); // catch joi/celebrate validation errors

export default todosRouter;
