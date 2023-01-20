//On a besoin de quoi ?

//Notre modèle Sequelize du Level !

// Pourquoi ?

//Pour utiliser les méthodes qui vont nous permettre de récupérer de la data


const Level = require('../models/V2/Level');

const levelController = {
    levelsPage: async (req, res) => {
        const levels = await Level.findAll();

        //Pas besoin de formatter "levels" avec .get()
        //Notre vue utilise uniquement les propriétés qu'elle a besoin
        res.render('levels', {levels});
    }
}

module.exports = levelController;
