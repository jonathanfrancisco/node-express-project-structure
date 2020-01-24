const express = require('express')
// const logger = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const bodyParser = require('body-parser')
const compression = require('compression')
const winston = require('winston')
const httpErrors = require('http-errors')

const config = require('../config')
const expressErrorHandler = require('./expressErrorHandler')
const apiRoutes = require('./components')

const app = express()
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      filename: '.logos/test.log'
    })
  ]
})

const setupAndStartExpress = async () => {
  // app.use(logger('dev'))
  logger.log('info', 'hello world')
  app.use(helmet())
  app.use(cors())
  app.use(bodyParser.json())
  app.use(compression())
  app.use(apiRoutes)
  app.use((req, res, next) => {
    next(new httpErrors.NotFound('route not found'))
  })
  app.use(expressErrorHandler(config.NODE_ENV))
  app.listen(config.PORT || 5000, () => {
    console.log(`server started listening on ${config.PORT || 5000}`)
  })
}

setupAndStartExpress()
