const { gql } = require('apollo-server-express');

const todosTypeDefs = gql`
  type Todo {
    _id: ID!
    body: String!
    createdAt: ISODate!
    updatedAt: ISODate
  }
  input AddTodoPayload {
    body: String!
  }
  type TodoResponse {
    todo: Todo!
  }
  type TodosResponse {
    todos: [Todo!]
  }
  extend type Query {
    getTodoById(id: ID!): TodoResponse!
    getTodos: TodosResponse
  }
  extend type Mutation {
    addTodo(todo: AddTodoPayload): TodoResponse
  }
`;

module.exports = todosTypeDefs;
