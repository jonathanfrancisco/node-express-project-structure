import path from 'path';
import config from './src/config';

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
      directory: path.join(__dirname, 'src/knex/migrations')
    },
    seeds: {
      directory: path.join(__dirname, 'src/knex/seeds')
    }
  }
};
