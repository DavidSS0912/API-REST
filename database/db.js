const Sequelize = require('sequelize')
const database = require('../config/config.json')

const sequelize = new Sequelize(
  database.development.database,
  database.development.username,
  database.development.password,
  {
    host: database.development.host,
    dialect: 'mysql',
  },
)

module.exports = sequelize
