const { DataTypes, Model } = require ('sequelize');

const sequelize = require ('../../sequelize_db_client');

class Tag extends Model {}

Tag.init({
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, 
{
  // Other model options go here
  sequelize, // We need to pass the connection instance
  tableName: 'tag' // We need to choose the model name
})

module.exports = Tag;
