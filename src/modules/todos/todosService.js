const createError = require('http-errors');
const Todo = require('./Todo');

const todosService = {};

todosService.addTodo = async addTodoRequestDto => {
  const todo = await Todo.query().insert({
    ...addTodoRequestDto,
    isDone: false
  });

  return todo;
};

todosService.getTodoById = async todoId => {
  const todo = await Todo.query().findById(todoId);
  if (!todo) {
    throw createError.NotFound(`Todo Id of ${todoId} not found`);
  }

  return todo;
};

todosService.getTodos = async () => {
  const todos = await Todo.query();

  return todos;
};

module.exports = todosService;
