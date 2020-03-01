const httpErrors = require('http-errors');
const validator = require('../../utils/joiValidator');
const schema = require('./todosRequestSchema');
const todosService = require('./todosService');

const todosController = {};

todosController.getTodos = async (req, res) => {
  const { error, value: validatedRequestQuery } = validator(
    req.query,
    schema.getTodos
  );
  if (error) throw httpErrors.BadRequest(error.details);

  const { searchQuery } = validatedRequestQuery;
  const todos = await todosService.getTodos(searchQuery);

  res.status(200).send(todos);
};

todosController.getTodoById = async (req, res) => {
  const { id } = req.params;
  const todo = await todosService.getTodoById(id);

  res.status(200).send(todo);
};

todosController.createTodo = async (req, res) => {
  const { error, value: validatedRequestBody } = validator(
    req.body,
    schema.createTodo
  );
  if (error) throw httpErrors.BadRequest(error.details);

  const todoInfo = validatedRequestBody;
  const todo = await todosService.createTodo(todoInfo);

  res.status(201).send(todo);
};

todosController.deleteTodos = async (req, res) => {
  const todos = await todosService.deleteTodos();

  res.status(200).send(todos);
};

todosController.deleteTodoById = async (req, res) => {
  const { id } = req.params;
  const todo = await todosService.deleteTodoById(id);

  res.status(200).send(todo);
};

module.exports = todosController;
