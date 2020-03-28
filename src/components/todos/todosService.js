const { ApolloError } = require('apollo-server-express');
const Todo = require('../../shared/models/Todo');

const todosService = {};

todosService.getTodoById = async id => {
  const todo = await Todo.query().findById(id);

  if (!todo) {
    throw new ApolloError('Todo not found', 'TODO_NOT_FOUND');
  }

  return {
    todo
  };
};

todosService.getTodos = async () => {
  const todos = await Todo.query();
  return { todos };
};

todosService.addTodo = async todo => {
  const newTodo = await Todo.query().insert({
    body: todo.body,
    isDone: false
  });

  return {
    todo: newTodo
  };
};

module.exports = todosService;
