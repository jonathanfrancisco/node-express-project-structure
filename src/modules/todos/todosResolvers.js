const validator = require('../../utils/validator');
const todosRequestSchema = require('./todosRequestSchema');
const todosService = require('./todosService');

const todosResolvers = {
  Query: {
    async todo(parent, args, context, info) {
      const { todoId } = args;
      return todosService.getTodoById(todoId);
    },
    async todos(parent, args, context, info) {
      return todosService.getTodos();
    }
  },
  Mutation: {
    async addTodo(parent, args, context, info) {
      const { addTodoRequestDTO } = args;
      validator(addTodoRequestDTO, todosRequestSchema.addTodo);

      return todosService.addTodo(addTodoRequestDTO);
    }
  }
};

module.exports = todosResolvers;
