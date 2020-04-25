const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const httpErrors = require('http-errors');
require('express-async-errors');

const config = require('./config');
const apiRoutes = require('./components');
const expressErrorHandler = require('./middlewares/expressErrorHandler');

const app = express();

// uncomment if using express-session and cookies
// use this as parameter for cors()
// const corsConfig = {
//   origin: null,
//   credentials: true,
// };
// if (config.nodeEnv !== 'development') {
//   corsConfig.origin = config.domainName;
//   app.set('trust proxy', 1);
//   sessionConfig.cookie.secure = true;
// } else {
//   corsConfig.origin = 'http://localhost:3000';
// }

// uncomment if using express-session and cookies
// use this as parameter for expressSession()
// const sessionConfig = {
//   secret: config.cookies.secret,
//   cookie: {},
//   resave: true,
//   saveUninitialized: false,
// };

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(compression());

app.use(apiRoutes);
app.use((req, res, next) => {
  next(new httpErrors.NotFound('route not found'));
});
app.use(expressErrorHandler(config.nodeEnv));

app.listen(config.port || 5000, () => {
  console.log(`server started listening on ${config.port || 5000}`);
});
