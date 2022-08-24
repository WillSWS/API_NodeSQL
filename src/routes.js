const express = require('express')
const UserController = require('./controllers/UserController')
const CarsController = require('./controllers/CarsController')
const MarcasController = require('./controllers/MarcasController')
const CarroceriasController = require('./controllers/CarroceriasController')
const routes = express.Router()
routes.get('/user', UserController.index);
routes.get('/cars', CarsController.index);
routes.post('/user', UserController.store);
routes.post('/marcas/:marca_id/cars', MarcasController.store);
routes.get('/marcas/:marca_id/cars', MarcasController.index);
routes.get('/carrocerias/:carroceria_id/cars', CarroceriasController.index );
routes.post('/carrocerias/:carroceria_id/cars', CarroceriasController.store );


module.exports = routes;
