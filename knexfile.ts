import path from 'path';
import config from './config';

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: config.database.host,
      port: config.database.port,
      user: config.database.user,
      password: config.database.password,
      database: config.database.name
    },
    migrations: {
      directory: path.join(__dirname, 'knex/migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'knex/seeds')
    }
  }
};
