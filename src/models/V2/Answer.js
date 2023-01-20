const { DataTypes, Model } = require ('sequelize');
const sequelize = require ('../../sequelize_db_client');

class Answer extends Model {}

Answer.init({
  description:{
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  sequelize,
  tableName: 'answer'
});

module.exports = Answer