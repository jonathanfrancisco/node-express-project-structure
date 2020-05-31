const { celebrate, Joi, Segments } = require('celebrate');

const todosRequestSchema = {};

todosRequestSchema.addTodo = celebrate(
  {
    [Segments.BODY]: Joi.object().keys({
      body: Joi.string()
        .min(4)
        .max(100)
        .required()
    })
  },
  { abortEarly: false }
);

module.exports = todosRequestSchema;
