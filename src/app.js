const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const compression = require('compression');
const httpErrors = require('http-errors');
require('express-async-errors');

const config = require('./config');
const expressErrorHandler = require('./middlewares/expressErrorHandler');

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(compression());

app.use(require('./services/todos'));

app.use((req, res, next) => {
  next(new httpErrors.NotFound('route not found'));
});
app.use(expressErrorHandler(config.nodeEnv));

app.listen(config.port || 5000, () => {
  console.log(`server started listening on ${config.port || 5000}`);
});
