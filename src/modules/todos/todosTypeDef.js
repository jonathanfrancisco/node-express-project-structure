const { gql } = require('apollo-server-express');

const todosTypeDef = gql`
  type Todo {
    id: ID!
    body: String!
    isDone: Boolean!
    createdAt: ISODate!
    updatedAt: ISODate
  }

  input AddTodoInput {
    body: String!
  }

  type AddTodoResponse {
    todo: Todo!
    message: String!
  }

  extend type Query {
    todo(todoId: ID!): Todo!
    todos: [Todo!]
  }

  extend type Mutation {
    addTodo(addTodoInput: AddTodoInput): AddTodoResponse
  }
`;

module.exports = todosTypeDef;
