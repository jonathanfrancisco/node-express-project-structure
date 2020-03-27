const { ApolloError, UserInputError } = require('apollo-server-express');

const joiValidator = require('../../utils/joiValidator');
const todosRequestSchema = require('./todosRequestSchema');

const Todo = require('../../shared/models/Todo');

const todosResolvers = {
  Query: {
    async getTodoById(parent, args, context, info) {
      const { id } = args;

      const todo = await Todo.findById(id);
      if (!todo) {
        throw new ApolloError('Todo not found', 'TODO_NOT_FOUND');
      }

      return {
        todo
      };
    },
    async getTodos(parent, args, context, info) {
      const todos = await Todo.find({});
      return { todos };
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

      const newTodo = await Todo.create({
        body: todo.body,
        isDone: false
      });

      return {
        todo: newTodo
      };
    }
  }
};

module.exports = todosResolvers;
