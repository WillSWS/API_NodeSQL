const express = require('express')
const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')

const routes = express.Router()

routes.get('/user', UserController.index)
routes.post('/user', UserController.store)

routes.post('/users/:user_id/addresses', AddressController.store)

module.exports = routes
