const { Sequelize } = require('sequelize');

const PG_URL = process.env.PG_URL || "postgres://oquiz:oquiz@localhost:5432/oquiz";

const defineAttributes = {
    define: {
        updatedAt: "updated_at",
        createdAt: "created_at"
    }
}

const sequelize = new Sequelize(PG_URL, defineAttributes) // Example for postgres

module.exports = sequelize;








//Ici on utilise la fonction test juste dans le but de tester notre connection
//Elle n'est pas essentielle
/*
async function test(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

test();
*/