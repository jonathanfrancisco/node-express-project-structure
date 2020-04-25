const httpErrors = require('http-errors');

const Todo = require('../../shared/models/Todo');

const todosService = {};

todosService.addTodo = async (todoInfo) => {
  const todo = await Todo.query().insert({
    ...todoInfo,
    isDone: false,
  });

  return {
    todo,
  };
};

todosService.getTodoById = async (id) => {
  const todo = await Todo.query().findById(id);
  if (!todo) {
    throw httpErrors.NotFound('Todo not found');
  }

  return {
    todo,
  };
};

todosService.getTodos = async () => {
  const todos = await Todo.query();
  return { todos };
};

module.exports = todosService;
