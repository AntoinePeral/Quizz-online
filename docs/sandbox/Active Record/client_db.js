const { Client } = require('pg');

const PG_LOGS = "postgres://oquiz:oquiz@localhost:5432/oquiz";

//On peut aussi faire
/*const PG_LOGS = {
    user: "oquiz",
    password: "oquiz",
    host: "localhost",
    port: 5432,
    database: "oquiz"
}

Si on enregistre cet objet dans .env, il faudra déjà l'enregistrer sous forme de string
Puis après l'avoir récupéré (process.env.PG_LOGS), il faudra faire un JSON.parse() dessus
exemple:
const pg_logs = JSON.parse(process.env.PG_LOGS)
*/

const client = new Client(PG_LOGS);

client.connect();

module.exports = client;
