const { gql } = require('apollo-server-express');

const todosTypeDefs = gql`
  type Todo {
    id: ID!
    body: String!
    createdAt: ISODate!
    updatedAt: ISODate
  }

  input AddTodoRequestDTO {
    body: String!
  }

  type AddTodoResponseDTO {
    todo: Todo!
    message: String!
  }

  extend type Query {
    todo(todoId: ID!): Todo!
    todos: [Todo!]
  }

  extend type Mutation {
    addTodo(addTodoRequestDTO: AddTodoRequestDTO): AddTodoResponseDTO
  }
`;

module.exports = todosTypeDefs;
