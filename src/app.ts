import express, { Request, Response, NextFunction } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';
import httpErrors, { HttpError } from 'http-errors';
import { Model } from 'objection';
import knexInstance from './knex';
import config from './config';
import api from './api';

Model.knex(knexInstance);

const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(compression());
app.use(morgan('tiny'));

app.use(api);

app.use((req, res, next: NextFunction) => {
  next(new httpErrors.NotFound('Route not found'));
});

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  if (!err) {
    next();
  }
  console.error(err.status);
  return res.status(err.status || 500).json({
    error:
      (!err.status || err.status === 500) && config.nodeEnv !== 'development'
        ? 'Internal Server Error'
        : err.message,
    status: err.status || 500
  });
});

app.listen(config.port || 5000, () => {
  console.log(`server started listening on ${config.port || 5000}`);
});
