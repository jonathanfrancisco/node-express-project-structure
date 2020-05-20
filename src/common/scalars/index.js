const { gql } = require('apollo-server-express');
const { GraphQLDateTime } = require('graphql-iso-date');

const scalarsTypeDefs = gql`
  scalar ISODate
`;

const scalarsResolvers = {
  ISODate: GraphQLDateTime
};

module.exports = { scalarsTypeDefs, scalarsResolvers };
