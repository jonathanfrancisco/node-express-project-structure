const Joi = require('@hapi/joi');

const todosRequestSchema = {};

todosRequestSchema.getTodos = Joi.object({
  searchQuery: Joi.string()
});

todosRequestSchema.createTodo = Joi.object({
  body: Joi.string()
    .min(4)
    .max(100)
    .required()
});

module.exports = todosRequestSchema;
