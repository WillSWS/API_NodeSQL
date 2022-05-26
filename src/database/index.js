const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const User = require('../model/User')
const Address = require('../model/Address')
const Marcas = require('../model/Marcas')

const connection = new Sequelize(dbConfig)

User.init(connection)
Address.init(connection)
Marcas.init(connection)

module.exports = connection
