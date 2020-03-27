const { ApolloError, UserInputError } = require('apollo-server-express');

const joiValidator = require('../../utils/joiValidator');
const todosRequestSchema = require('./todosRequestSchema');

// import model here from models e.g Todo model

const todosResolvers = {
  Query: {
    getTodoById: async (parent, args, context, info) => {
      // uncomment and throw error if no todo is found
      // throw new ApolloError('Todo not found!, 'TODO_NOT_FOUND')
      return {
        id: 'id-id-id',
        body: 'nani'
      };
    },
    getTodos: async (parent, args, context, info) => {
      const payloadOrSomething = {
        searchQuery: 1
      };

      const { error } = joiValidator(
        payloadOrSomething,
        todosRequestSchema.getTodos
      );
      if (error) {
        throw new UserInputError('Invalid payload', {
          payloadErrors: error.details
        });
      }

      return [];
    }
  }
};

module.exports = todosResolvers;
