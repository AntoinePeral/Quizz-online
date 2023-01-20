const CoreModel = require("./CoreModel");

class Level extends CoreModel{
    name;

    constructor(objet) {// objet = { id: 1, name: "Facile"}
        super(objet);
        this.name = objet.name;
    }
}

module.exports = Level;
