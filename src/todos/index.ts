import { Router } from 'express';

import catchErrors from '../../common/errors/catchErrors';
import parseExpressRequest from '../../common/utils/parseExpressRequest';

import TodosController from './todos.controller';

const todosRouter = Router();
const todosController = new TodosController();

todosRouter.post('/todos', async (req, res) => {
  const httpRequest = parseExpressRequest(req);
  const { statusCode, body } = await catchErrors(todosController.addTodo)(
    httpRequest
  );
  return res.status(statusCode).send(body);
});

export default todosRouter;
