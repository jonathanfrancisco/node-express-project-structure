const Todo = require('./Todo');

const todosController = {};

todosController.addTodo = async (req, res) => {
  const addTodoRequestDto = req.body;
  const todo = await Todo.query().insert({
    ...addTodoRequestDto
  });

  return res.status(201).send({
    todo,
    message: 'Succesfully added'
  });
};

todosController.getTodoById = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.query().findById(id);
  if (!todo) {
    return res.status(404).send({
      message: 'Todo not found'
    });
  }

  return res.status(200).send(todo);
};

todosController.getTodos = async (req, res) => {
  const todos = await Todo.query().select('*');

  return res.status(200).send(todos);
};

module.exports = todosController;
