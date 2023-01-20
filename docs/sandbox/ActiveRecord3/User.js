const validators = require('./validator');
const db = require('./client_db');

class User extends CoreModel{

    static tableName = "user";

    email;
    password;
    firstname;
    lastname;

    constructor(objet){
        super(objet)

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
}

module.exports = User;

