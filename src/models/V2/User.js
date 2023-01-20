const { DataTypes, Model } = require ('sequelize');

const sequelize = require ('../../sequelize_db_client');

class User extends Model {}

User.init({
  // Model attributes are defined here
  firstname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastname: {
    type: DataTypes.STRING,
  },
  email : {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  tableName: 'user' // We need to choose the model name
});

module.exports = User;