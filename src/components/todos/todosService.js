const httpErrors = require('http-errors');
const Todo = require('../../shared/models/Todo');

const todosService = {};

todosService.getTodos = async searchQuery => {
  // searchQuery was never used here thooo
  const todos = await Todo.query();
  return { todos };
};

todosService.createTodo = async todoInfo => {
  const todo = await Todo.query().insert({
    ...todoInfo,
    isDone: false
  });

  return {
    todo
  };
};

todosService.getTodoById = async id => {
  const todo = await Todo.query().findById(id);
  if (!todo) throw httpErrors.NotFound('Todo not found');

  return {
    todo
  };
};

todosService.deleteTodos = async () => {
  const deletedTodos = await Todo.query()
    .delete()
    .returning('*');

  return {
    todosDeleted: deletedTodos.length
  };
};

todosService.deleteTodoById = async id => {
  const deletedTodo = await Todo.query()
    .deleteById(id)
    .returning('*');
  if (!deletedTodo) throw httpErrors.NotFound('Todo not found');

  return {
    todo: deletedTodo
  };
};

module.exports = todosService;
