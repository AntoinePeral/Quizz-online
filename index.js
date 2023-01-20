// Chargement des variables environnement
require("dotenv").config();
const port = process.env.PORT || 3000;

// Chargement des dépendances
const express = require('express');
const middlewares = require("./src/middlewares");
const router = require('./src/router');

// Création de l'application Express
const app = express();

// Configuration du view engine
app.set('view engine', 'ejs');
app.set('views', './src/views');

// Configuration du dossier public
app.use(express.static('public'));

// Configuration du router
app.use(router);

// Configuration du middleware 404
app.use(middlewares.notFoundMiddleware);

// Lancement de l'application
app.listen(port, () => {
    console.log(`Listening @ http://localhost:${port}`);
});
