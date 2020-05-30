const requestValidator = require('../../utils/requestValidator');
const todosRequestSchema = require('./todosRequestSchema');
const Todo = require('./Todo');

const todosResolver = {
  Query: {
    async todo(_, args) {
      const { todoId } = args;
      const todo = await Todo.query().findById(todoId);

      return todo;
    },
    async todos() {
      const todos = await Todo.query().select('*');
      return todos;
    }
  },
  Mutation: {
    async addTodo(_, { addTodoInput }) {
      const validatedAddTodoInput = requestValidator(
        addTodoInput,
        todosRequestSchema.addTodo
      );

      const newTodo = await Todo.query().insert(validatedAddTodoInput);

      return {
        todo: newTodo,
        message: 'Added successfully'
      };
    }
  }
};

module.exports = todosResolver;
