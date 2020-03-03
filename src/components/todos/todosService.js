const httpErrors = require('http-errors');
const Todo = require('../../shared/models/Todo');

const todosService = {};

todosService.getTodos = async searchQuery => {
  // searchQuery was never used here thooo
  const todos = await Todo.find({});
  return { todos };
};

todosService.createTodo = async todoInfo => {
  const todo = await Todo.create(todoInfo);

  return {
    todo
  };
};

todosService.getTodoById = async id => {
  const todo = await Todo.findOne({
    _id: id
  });
  if (!todo) throw httpErrors.NotFound('Todo not found');

  return {
    todo
  };
};

todosService.deleteTodos = async () => {
  const result = await Todo.deleteMany({});

  return {
    todosDeleted: result.deletedCount
  };
};

todosService.deleteTodoById = async id => {
  const todo = await Todo.findOne({ _id: id });
  if (!todo) throw httpErrors.NotFound('Todo not found');

  await todo.remove();

  return {
    todo
  };
};

module.exports = todosService;
