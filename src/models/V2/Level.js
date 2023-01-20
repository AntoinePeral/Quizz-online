const { DataTypes, Model } = require('sequelize');

//Ici on récupère le client sequelize
const sequelize = require('../../sequelize_db_client');

class Level extends Model {}

const levelProperties = {       //Premier argument ici : va décrire les champs qu'on souhaite avoir
    name: {                     //On veut unt champ "name" 
        type: DataTypes.STRING, //Avec un type STRING
        allowNull: false        //On n'autorise pas une valeur null
    }
}

const levelOptions = {          //Le deuxième argument va contenir les options de connexion pour chaque modèle
    sequelize,                  //On a besoin de passer l'instance de connexion
    tableName: 'level'          //On doit préciser le nom de notre table dans la db, pour que Sequelize fasse le lien
}

Level.init(levelProperties, levelOptions); //.init est une méthode de classe static provenant de la classe mère "Model"

module.exports = Level;

