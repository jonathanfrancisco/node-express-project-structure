const apiRoutes = require('express').Router()

apiRoutes.use(require('./todos'))
apiRoutes.use(require('./threads'))
apiRoutes.use(require('./threads/comments'))

module.exports = apiRoutes
