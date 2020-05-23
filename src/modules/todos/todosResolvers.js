const requestValidator = require('../../utils/requestValidator');
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
    async addTodo(_, { addTodoRequestDTO }) {
      const validAddTodoRequestDTO = requestValidator(
        addTodoRequestDTO,
        todosRequestSchema.addTodo
      );

      return todosService.addTodo(validAddTodoRequestDTO);
    }
  }
};

module.exports = todosResolvers;
