const path = require('path')
const config = require('./config')

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: config.DB_HOST,
      port: config.DB_PORT,
      user: config.DB_USER,
      password: config.DB_PASSWORD,
      database: config.DB_NAME
    },
    migrations: {
      directory: path.join(__dirname, '/knex/migrations')
    },
    seeds: {
      directory: path.join(__dirname, '/knex/seeds')
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
}
