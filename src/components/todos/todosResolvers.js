const { UserInputError } = require('apollo-server-express');

const joiValidator = require('../../utils/joiValidator');
const todosRequestSchema = require('./todosRequestSchema');
const todosService = require('./todosService');

const todosResolvers = {
  Query: {
    async getTodoById(parent, args, context, info) {
      const { id } = args;
      return todosService.getTodoById(id);
    },
    async getTodos(parent, args, context, info) {
      return todosService.getTodos();
    }
  },
  Mutation: {
    async addTodo(parent, args, context, info) {
      const { todo } = args;

      const { error } = joiValidator(todo, todosRequestSchema.addTodo);
      if (error) {
        throw new UserInputError('Invalid payload', {
          payloadErrors: error.details
        });
      }

      return todosService.addTodo(todo);
    }
  }
};

module.exports = todosResolvers;
