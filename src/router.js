// Chargement du Router
const { Router } = require("express");
// La ligne au dessus ^^^ revient à faire :
// const Router = require("express").Router;

const router = Router();

// Chargement des controllers
const mainController = require("./controllers/mainController");
const levelController = require("./controllers/levelController");

// Routes
router.get("/", mainController.renderHomePage);
router.get("/levels", levelController.levelsPage);

// Export
module.exports = router;


/* ---------------------------------------------
Pour expliquer l'utilisation de { Router }


const personne = {
    prenom: "John",
    nom: "Lenon"
}

const prenom = personne.prenom // "John"

équivaut à :

const { prenom } = personne;   // "John"


*/
