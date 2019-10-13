const testRouter = require('express').Router()
const catchErrors = require('./catchErrors')
const testController = require('../controllers/testController')

testRouter.get('/', catchErrors(testController.decorateName))

module.exports = testRouter
