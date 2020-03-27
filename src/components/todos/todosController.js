const httpErrors = require('http-errors');
const todosRequestSchema = require('./todosRequestSchema');
const joiValidator = require('../../utils/joiValidator');
const todosService = require('./todosService');

const todosController = {};

todosController.addTodo = async (req, res) => {
  const { error, value: validatedRequestBody } = joiValidator(
    req.body,
    todosRequestSchema.addTodo
  );
  if (error) {
    throw httpErrors.BadRequest(error.details);
  }

  const todo = validatedRequestBody;

  res.status(201).send(await todosService.addTodo(todo));
};

todosController.getTodoById = async (req, res) => {
  const { id } = req.params;
  const todo = await todosService.getTodoById(id);

  res.status(200).send(todo);
};

todosController.getTodos = async (req, res) => {
  const todos = await todosService.getTodos();

  res.status(200).send(todos);
};

module.exports = todosController;
