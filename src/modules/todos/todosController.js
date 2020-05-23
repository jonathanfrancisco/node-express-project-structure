const todosService = require('./todosService');

const todosController = {};

todosController.addTodo = async (req, res) => {
  const addTodoRequestDto = req.body;
  const todo = await todosService.addTodo(addTodoRequestDto);

  return res.status(201).send({
    todo,
    message: 'Succesfully added'
  });
};

todosController.getTodoById = async (req, res) => {
  const { id } = req.params;
  const todo = await todosService.getTodoById(id);

  return res.status(200).send(todo);
};

todosController.getTodos = async (req, res) => {
  const todos = await todosService.getTodos();

  return res.status(200).send(todos);
};

module.exports = todosController;
