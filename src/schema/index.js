const { gql } = require('apollo-server-express');
const { mergeResolvers } = require('merge-graphql-schemas');

const { scalarsTypeDef, scalarsResolver } = require('./scalars');
const { todosTypeDef, todosResolver } = require('../modules/todos');

const rootTypeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;
const typeDefs = [rootTypeDefs, scalarsTypeDef, todosTypeDef];

const resolvers = mergeResolvers([scalarsResolver, todosResolver]);

module.exports = {
  typeDefs,
  resolvers
};
