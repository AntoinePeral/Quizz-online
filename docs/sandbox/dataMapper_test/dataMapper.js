//Fichier dataMapper
//KESKECE ?
//Une couche logicielle qui gère les requêtes à la base de données

const User = require('./User');
const db = require('./client_db');

const dataMapper = {
    //Nos méthodes, qui vont faire appel à la BDD !

    //Cette méthode est classique : On retourne nos données brutes extraite depuis la BDD
    getAllTags: async () => {
        const query = `SELECT * FROM "tag"`;
        const result = await db.query(query);
        return result.rows;//Retourne un [] qui contient des {}
    },

    //Cette méthode est un peu nouvelle : On retourne des données wrappées par notre modèle User
    getUserById: async (userId) => {
        const query = {
            text: `SELECT * FROM "user" WHERE "id" = $1`,
            values: [userId]
        };
        const result = await db.query(query);
        const rawUser = result.rows[0];
        const user = new User(rawUser);
        return user;
    }
};

module.exports = dataMapper;
