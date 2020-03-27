const express = require('express');
const { ApolloServer, ApolloError } = require('apollo-server-express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');

const databaseConnection = require('./database');
const config = require('./config');

const { typeDefs, resolvers } = require('./api/graphql');

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

const setupAndStartExpress = async () => {
  await databaseConnection();

  const corsConfig = {
    // uncomment if using express-session and cookies
    // install expres-session and cookie parseralso
    // origin: null,
    // credentials: true
  };

  // uncomment if using express-session and cookies
  // install expres-session and cookie parseralso
  // const sessionConfig = {
  //   secret: config.cookies.secret,
  //   cookie: {},
  //   resave: true,
  //   saveUninitialized: false
  // };

  if (config.nodeEnv !== 'development') {
    corsConfig.origin = config.domainName;
    app.set('trust proxy', 1);

    // uncomment if using express-sessiona and cookies
    // sessionConfig.cookie.secure = true;
  } else {
    corsConfig.origin = 'http://localhost:3000';
  }

  // initial middlewares
  app.use(helmet());
  app.use(cors(corsConfig));
  app.use(compression());

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(config.port || 5000, () => {
    console.log(`server started listening on ${config.port || 4000}`);
  });
};

setupAndStartExpress();
