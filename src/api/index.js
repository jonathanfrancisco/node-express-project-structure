const apiRouter = require('express').Router();
const todosApi = require('./todos');

apiRouter.use(todosApi);

module.exports = apiRouter;
