const createError = require('http-errors');
const TodoModel = require('./todoModel');

const todosService = {};

todosService.addTodo = async addTodoDTO => {
  const todo = await TodoModel.query().insert({
    ...addTodoDTO,
    isDone: false
  });

  return todo;
};

todosService.getTodoById = async todoId => {
  const todo = await TodoModel.query().findById(todoId);
  if (!todo) {
    throw createError.NotFound(`Todo Id of ${todoId} not found`);
  }

  return todo;
};

todosService.getTodos = async () => {
  const todos = await TodoModel.query();

  return todos;
};

module.exports = todosService;
