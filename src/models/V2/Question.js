const { DataTypes, Model } = require ('sequelize');

const sequelize = require ('../../sequelize_db_client');

class Question extends Model {}

const questionProperties = {
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  anecdote: {
    type: DataTypes.TEXT,
  },
  wiki: {
    type: DataTypes.TEXT,
  },
  level_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quiz_id :{
    type: DataTypes.INTEGER,
    allowNull: false
  }
}

const questionOptions = {
  sequelize,
  tableName: 'question'
}

Question.init(questionProperties, questionOptions);

module.exports = Question;