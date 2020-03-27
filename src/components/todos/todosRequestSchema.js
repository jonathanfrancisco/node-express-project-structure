const Joi = require('@hapi/joi');

const todosRequestSchema = {};

todosRequestSchema.addTodo = Joi.object({
  body: Joi.string()
    .min(4)
    .max(100)
    .required()
});

module.exports = todosRequestSchema;
