const express = require('express')
const httpErrors = require('http-errors')
const logger = require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()
app.use(logger('dev'))
app.use(bodyParser.json())

// routes here

// if none of the routes above matches
app.use((req, res, next) => {
  next(new httpErrors.NotFound('route not found'))
})

// catch errors here
app.use((err, req, res, next) => {
  const isProduction = app.get('env') === 'production'
  if (isProduction) err = {}
  console.error(err)
  res.status(err.status || 500).json({
    message: isProduction ? 'internal server error' : err.message
  })
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`server started listening on ${process.env.PORT || 3000}`)
})
