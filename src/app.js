const express = require('express')
const httpErrors = require('http-errors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const databaseConnection = require('./database')
const testRouter = require('./routes/testRouter')
require('dotenv').config()

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
  app.use((err, req, res) => {
    console.error(err)
    if (err.status) {
      return res.status(err.status).json({
        message: err.message
      })
    } else {
      const isProduction = app.get('env') === 'production'
      return res.status(500).json({
        message: isProduction ? 'internal server error' : err.message
      })
    }
  })
  app.listen(process.env.PORT || 3000, () => {
    console.log(`server started listening on ${process.env.PORT || 3000}`)
  })
}

setupAndStartExpress()
