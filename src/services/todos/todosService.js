const httpErrors = require('http-errors');

const Todo = require('./todo');

const todosService = {};

todosService.addTodo = async todoInfo => {
  const todo = await Todo.query().insert({
    ...todoInfo,
    isDone: false
  });

  return {
    todo,
    message: 'Todo added successfully!'
  };
};

todosService.getTodoById = async id => {
  const todo = await Todo.query().findById(id);

  return todo;
};

todosService.getTodos = async () => {
  const todos = await Todo.query();

  return todos;
};

module.exports = todosService;
