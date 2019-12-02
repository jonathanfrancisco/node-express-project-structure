const express = require('express')
const httpErrors = require('http-errors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const config = require('./config')
const databaseConnection = require('./database')

const todoAPI = require('./components/todo/api')

const app = express()

const setupAndStartExpress = async () => {
  await databaseConnection()

  app.use(logger('dev'))
  app.use(bodyParser.json())

  app.use(todoAPI)

  app.use((req, res, next) => {
    next(new httpErrors.NotFound('route not found'))
  })
  app.use((err, req, res, next) => {
    console.error(err)
    if (!err.status) {
      const isProduction = app.get('env') === 'production'
      return res.status(500).json({
        message: isProduction ? 'internal server error' : err.message
      })
    }
    if (err.status === 400) {
      return res.status(err.status).json({
        error: {
          data: err.message
        }
      })
    }
    return res.status(err.status).json({
      error: {
        description: err.message
      }
    })
  })

  app.listen(config.PORT || 5000, () => {
    console.log(`server started listening on ${config.PORT || 5000}`)
  })
}

setupAndStartExpress()
