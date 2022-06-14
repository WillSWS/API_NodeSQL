const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../model/User')
const Marcas = require('../model/Marcas')
const Cars = require('../model/Cars')
const Carrocerias = require('../model/Carrocerias')

const connection = new Sequelize(dbConfig)

User.init(connection)
Marcas.init(connection)
Cars.init(connection)
Carrocerias.init(connection)
Cars.associate(connection.models)
Carrocerias.associate(connection.models)
Marcas.associate(connection.models)

module.exports = connection
