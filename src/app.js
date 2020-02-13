const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const bodyParser = require('body-parser')
const compression = require('compression')
const httpErrors = require('http-errors')

const config = require('./config')
const databaseConnection = require('./database')
const expressErrorHandler = require('./expressErrorHandler')
const apiRoutes = require('./components')

const app = express()

const setupAndStartExpress = async () => {
  // initial middlewares
  await databaseConnection()
  app.use(helmet())
  app.use(cors())
  app.use(bodyParser.json())
  app.use(compression())

  app.use(apiRoutes)
  app.use((req, res, next) => {
    next(new httpErrors.NotFound('route not found'))
  })
  app.use(expressErrorHandler(config.nodeEnv))

  app.listen(config.port || 5000, () => {
    console.log(`server started listening on ${config.port || 5000}`)
  })
}

setupAndStartExpress()
