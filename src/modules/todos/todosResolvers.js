const validator = require('../../utils/validator');
const todosRequestSchema = require('./todosRequestSchema');
const todosService = require('./todosService');

const todosResolvers = {
  Query: {
    async todo(_, args) {
      const { todoId } = args;
      return todosService.getTodoById(todoId);
    },
    async todos() {
      return todosService.getTodos();
    }
  },
  Mutation: {
    async addTodo(_, args) {
      const { addTodoRequestDTO } = args;
      validator(addTodoRequestDTO, todosRequestSchema.addTodo);

      return todosService.addTodo(addTodoRequestDTO);
    }
  }
};

module.exports = todosResolvers;
