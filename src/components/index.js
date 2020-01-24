const apiRoutes = require('express').Router()

apiRoutes.use(require('./todos'))

module.exports = apiRoutes
