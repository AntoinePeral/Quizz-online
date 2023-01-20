const { DataTypes, Model } = require('sequelize');

const sequelize = require ('../../sequelize_db_client');

class Quiz extends Model {};

const quizProperties = {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  }  
}

const quizOptions = {
  sequelize,
  tableName: 'quiz'
}

Quiz.init(quizProperties, quizOptions);

module.exports = Quiz;