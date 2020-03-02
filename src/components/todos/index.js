const todosController = require('./todosController');
const { todosTypeDefs, todosResolvers } = require('./todosGraphQL');
const todosRequestSchema = require('./todosRequestSchema');
const todosService = require('./todosService');

module.exports = {
  todosController,
  todosTypeDefs,
  todosResolvers,
  todosRequestSchema,
  todosService
};
