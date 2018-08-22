const sequelize = require('./index') // trabalhar na mesma instancia de sequelize

module.exports = (sequelize, DataTypes) => {

  return sequelize.define('event', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  })

}