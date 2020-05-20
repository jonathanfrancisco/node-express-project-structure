const todosService = require('./todosService');

const todosController = {};

todosController.addTodo = async (req, res) => {
  const addTodoDTO = req.body;

  res.status(201).send(await todosService.addTodo(addTodoDTO));
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
