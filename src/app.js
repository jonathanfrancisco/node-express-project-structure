const express = require('express')
const httpErrors = require('http-errors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const config = require('../config')
const expressErrorHandler = require('./expressErrorHandler')

const todosAPI = require('./components/todos')

const app = express()

const setupAndStartExpress = async () => {
  app.use(logger('dev'))
  app.use(bodyParser.json())

  app.use(todosAPI)

  app.use((req, res, next) => {
    next(new httpErrors.NotFound('route not found'))
  })
  app.use(expressErrorHandler('development'))

  app.listen(config.PORT || 5000, () => {
    console.log(`server started listening on ${config.PORT || 5000}`)
  })
}

setupAndStartExpress()
