const { gql } = require('apollo-server-express');
const { GraphQLDateTime } = require('graphql-iso-date');

const scalarsTypeDef = gql`
  scalar ISODate
`;

const scalarsResolver = {
  ISODate: GraphQLDateTime
};

module.exports = { scalarsTypeDef, scalarsResolver };
