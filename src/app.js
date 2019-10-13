const express = require('express')
const httpErrors = require('http-errors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const config = require('./config')
const databaseConnection = require('./database')
const testRouter = require('./routes/testRouter')

const app = express()

const setupAndStartExpress = async () => {
  await databaseConnection()
  app.use(logger('dev'))
  app.use(bodyParser.json())

  // routers here
  app.use('/test', testRouter)

  // if none of the routes above matches
  app.use((req, res, next) => {
    next(new httpErrors.NotFound('route not found'))
  })

  // catch errors here
  app.use((err, req, res, next) => {
    console.error(err)
    if (!err.status) {
      const isProduction = app.get('env') === 'production'
      return res.status(500).json({
        message: isProduction ? 'internal server error' : err.message
      })
    } else if (err.status === 400) {
      return res.status(err.status).json({
        errors: err.message
      })
    } else {
      return res.status(err.status).json({
        message: err.message
      })
    }
  })

  // start server listening
  app.listen(config.PORT || 3000, () => {
    console.log(`server started listening on ${config.PORT || 3000}`)
  })
}

setupAndStartExpress()
