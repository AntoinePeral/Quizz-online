const validators = require('./validator');
const db = require('./client_db');

class User {
    id;
    email;
    password;
    firstname;
    lastname;

    constructor(objet){

        //EMAIL
        validators.validateEmail(objet.email, "objet.email");
        this.email = objet.email;

        //PASSWORD
        validators.validateString(objet.password, "objet.password");
        this.password = objet.password;

        //FIRSTNAME
        validators.validateString(objet.firstname, "objet.firstname");
        this.firstname = objet.firstname;

        //LASTNAME
        validators.validateString(objet.lastname, "objet.lastname");
        this.lastname = objet.lastname;
    }

    // ============ Méthodes Statiques ============

    static async findAll(){
        const query = `SELECT * FROM "user"`; //On écrit notre query

        const rawResults = await db.query(query); //On execute notre query
        const results = rawResults.rows.map(rawResult => new User(rawResult)); // Ici, pour chaque rawResult contenu dans rawResult.rows, on l'instancie avec la classe User
        //On utilise rawResults.rows puisque la db nous envoie un gros objet avec beaucoup de propriétés inutiles pour nous
        //rawResults.rows contient uniquement les enregistrements demandés
        return results;
    }

    static async findById(id){
        const query = {
            text: `SELECT * FROM "user" WHERE "id" = $1`,
            values: [id]
        };
        const result = await db.query(query);
        const rawUser = result.rows[0];//[{}]

        if(!rawUser){ return null; }//Si rawUser est undefined, on return null. Cela va protéger notre instance en éviter de créer une instance avec "undefined" comme paramètre
        return new User(rawUser);
    }

    static async findByEmail(email){
        const query = {
            text: `SELECT * FROM "user" WHERE "email" = $1`,
            values: [email]
        };
        const result = await db.query(query);
        const rawUser = result.rows[0];//[{}]

        if(!rawUser){ return null; }//Si rawUser est undefined, on return null. Cela va protéger notre instance en éviter de créer une instance avec "undefined" comme paramètre
        return new User(rawUser);
    }


    // ============ Méthodes d'instances ============

    async insert(){
        const query = {
            text: `INSERT INTO "user"("firstname", "lastname", "email", "password") VALUES ($1, $2, $3, $4) RETURNING "id"`, //RETURNING permet de demander à la BDD de nous renvoyer les informations d'un champ. Ici on lui demande de nous renvoyer l'ID
            values: [this.firstname, this.lastname, this.email, this.password]
        };
        const result = await db.query(query);
        this.id = result.rows[0].id; //On a laissé postgres créer l'ID, on récupère l'id pour le mettre dans l'instance courante
    }

    async delete(){
        const query = {
            text: `DELETE FROM "user" WHERE "id" = $1`,
            values: [this.id]
        };
        const result = await db.query(query);
    }

    async update() {
        const query = {
            text: `UPDATE "user" 
                   SET 
                    "firstname" = $1 
                    "lastname" = $2
                    "email" = $3
                    "password"= $4
                   WHERE "id"= $5`,
            values: [this.firstname, this.lastname, this.email, this.password, this.id]
        };
        const result = await db.query(query);
    }
}

module.exports = User;

