import knex from 'knex';
const knexfile = require('../knexfile');

const knexInstance = knex(knexfile.development);

export default knexInstance;
