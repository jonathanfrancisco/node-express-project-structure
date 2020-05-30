const express = require('express');
const { ApolloServer, ApolloError } = require('apollo-server-express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const { Model } = require('objection');

const knex = require('./knex');
const config = require('./config');
const { typeDefs, resolvers } = require('./schema');

Model.knex(knex);
const app = express();
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: config.nodeEnv === 'development',
  formatError: error => {
    console.log(error);
    const codeErrsNotToShowOnProdStaging = [
      'GRAPHQL_VALIDATION_FAILED',
      'INTERNAL_SERVER_ERROR'
    ];
    if (config.nodeEnv !== 'development') {
      if (codeErrsNotToShowOnProdStaging.includes(error.extensions.code)) {
        return new ApolloError(
          'Internal server error',
          'INTERNAL_SERVER_ERROR'
        );
      }
    }
    return error;
  }
});

app.use(helmet());
app.use(cors());
app.use(compression());

apolloServer.applyMiddleware({ app, cors: false });

app.listen(config.port || 5000, () => {
  console.log(`server started listening on ${config.port || 4000}`);
});
