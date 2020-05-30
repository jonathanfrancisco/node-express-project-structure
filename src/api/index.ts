import { Router } from 'express';
import todosApi from './todos';

const apiRouter = Router();
apiRouter.use(todosApi);

export default apiRouter;
