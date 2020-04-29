const sequelize = require('sequelize')
const modelVillains = require('./villains')

const connection = new sequelize('Villains', 'villains', 'vi11Ain$', {
  host: 'localhost', dialect: 'mysql',
})

const Villain = modelVillains(connection, sequelize)

modelVillains.exports = { Villain }
