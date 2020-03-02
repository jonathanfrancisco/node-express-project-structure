const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const httpErrors = require('http-errors');

const config = require('./config');
const expressErrorHandler = require('./expressErrorHandler');
const apiRoutes = require('./api/rest');

const { typeDefs, resolvers } = require('./api/graphql');

const app = express();
const apolloServer = new ApolloServer({ typeDefs, resolvers });

const setupAndStartExpress = async () => {
  // initial middlewares
  app.use(helmet());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(compression());

  apolloServer.applyMiddleware({ app });
  app.use(apiRoutes);
  app.use((req, res, next) => {
    next(new httpErrors.NotFound('route not found'));
  });
  app.use(expressErrorHandler(config.nodeEnv));

  app.listen(config.port || 5000, () => {
    console.log(`server started listening on ${config.port || 5000}`);
  });
};

setupAndStartExpress();
