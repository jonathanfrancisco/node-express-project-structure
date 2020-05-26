import { Model } from 'objection';
import knex from 'knex';
import { monitorEventLoopDelay } from 'perf_hooks';
const knexfile = require('../../knexfile');

const knexInstance = knex(knexfile.development);

export default knexInstance;
