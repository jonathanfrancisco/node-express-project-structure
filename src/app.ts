import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';
import { Model } from 'objection';
import knexInstance from '../knex';
import config from '../config';

import todosAPI from './todos';

Model.knex(knexInstance);

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());
app.use(compression());
app.use(morgan('tiny'));

app.use(todosAPI);
app.use((req, res) => {
  return res.sendStatus(404).send({
    message: 'Route not found'
  });
});

app.listen(config.port || 5000, () => {
  console.log(`server started listening on ${config.port || 5000}`);
});
