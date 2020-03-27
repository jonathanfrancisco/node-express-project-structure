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

module.exports = todosTypeDefs;
