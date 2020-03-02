const { gql } = require('apollo-server-express');

const todosTypeDefs = gql`
  type Todo {
    id: ID!
    body: String
  }

  extend type Query {
    getTodoById: Todo
    getTodos: [Todo!]!
  }
`;

const todosResolvers = {
  Query: {
    getTodoById: () => {
      return {
        id: 'id-id-id',
        body: 'nani'
      };
    },
    getTodos: () => []
  }
};

module.exports = { todosTypeDefs, todosResolvers };
