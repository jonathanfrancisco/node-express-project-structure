import { Router } from 'express';
import catchErrors from '../../common/errors/catchErrors';
import parseExpressRequest from '../../common/utils/parseExpressRequest';

import TodosControllerImpl from './TodosControllerImpl';
import TodosServiceImpl from './TodosServiceImpl';

const todosRouter = Router();

const todosController = new TodosControllerImpl(new TodosServiceImpl());

todosRouter.post('/todos', async (req, res) => {
  const httpRequest = parseExpressRequest(req);
  const { statusCode, body } = await catchErrors(todosController.addTodo)(
    httpRequest
  );
  return res.status(statusCode).send(body);
});

export default todosRouter;
