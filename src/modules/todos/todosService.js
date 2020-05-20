const httpErrors = require('http-errors');

const Todo = require('./todo');

const todosService = {};

todosService.addTodo = async addTodoDTO => {
  const todo = await Todo.query().insert({
    ...addTodoDTO,
    isDone: false
  });

  return {
    todo,
    message: 'Added successfully'
  };
};

todosService.getTodoById = async todoId => {
  const todo = await Todo.query().findById(todoId);
  if (!todo) {
    throw httpErrors.NotFound(`Todo id of ${todoId} not found.`);
  }

  return todo;
};

todosService.getTodos = async () => {
  const todos = await Todo.query();

  return todos;
};

module.exports = todosService;
