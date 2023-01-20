const db = require('./client_db');

class Tag{
    id;
    name;

    constructor(objet){
        this.id = objet.id;
        this.name = objet.name;
    }

    //Méthodes d'instance

    //On rajoute une méthode insert()
    async insert(){
        //Besoin qu'elle accède à la BDD => on aura besoin d'un client_db.js
        const query = {
            text: `INSERT INTO "tag"("name") VALUES ($1) RETURNING "id"`,
            values: [this.name]
        };
        const result = await db.query(query);
        this.id = result.rows[0].id; //On a laissé postgres créer l'ID, on récupère l'id pour le mettre dans l'instance courante
    }

    async delete(){
        const query = {
            text: `DELETE FROM "tag" WHERE "id" = $1`,
            values: [this.id]
        };
        const result = await db.query(query);
    }

    async update(value) {
        const query = {
            text: `UPDATE "tag" SET "name" = $1 WHERE "id"= $2`,
            values: [value, this.id]
        };
        const result = await db.query(query);
    }


    //Méthodes de classes

    static async getAll(){
        const query = `SELECT * FROM "tag"`;
        const rawTags = await db.query(query);//tableau d'objets basiques
        //Première méthode pour wrapper/instancier nos résultats 
        /*const tags = [];
        for(let rawTag of rawTags.rows) {
            tags.push(new Tag(rawTag));
        }
        return tags;*/

        //Deuxième méthode, plus moderne avec .map()
        const tags = rawTags.map(rawTag => new Tag(rawTag));//Pour chaque rawTag dans rawTags, on execute le traitement 

    }


}

module.exports = Tag;
