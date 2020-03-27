const path = require('path');
const config = require('./src/config');

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
  // production: {
  //   client: 'pg',
  //   connection: {
  //     host: config.DB_HOST,
  //     user: config.DB_USER,
  //     password: config.DB_PASSWORD,
  //     database: config.DB_NAME
  //   },
  //   migrations: {
  //     directory: path.join(__dirname, '/knex/migrations')
  //   },
  //   seeds: {
  //     directory: path.join(__dirname, '/knex/seeds')
  //   }
  // }
};
