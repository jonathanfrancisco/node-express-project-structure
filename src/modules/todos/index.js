const todosRouter = require('express').Router();
const {
  celebrate,
  Joi,
  errors: catchValidationErrors,
  Segments
} = require('celebrate');
const todosController = require('./todosController');

const validation = {
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

todosRouter.post('/todos', validation['/todos'], todosController.addTodo);
todosRouter.get('/todos/:id', todosController.getTodoById);
todosRouter.get('/todos', todosController.getTodos);
todosRouter.use(catchValidationErrors()); // catch joi/celebrate validation errors

module.exports = todosRouter;
