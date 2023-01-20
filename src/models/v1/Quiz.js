const CoreModel = require("./CoreModel");

class Quiz extends CoreModel {
    title;
    description;
    user_Id;

    constructor(objet){
        super(objet);

        this.title = objet.title;
        this.description = objet.description;
        this.user_Id = objet.user_Id;
    }
}

module.exports = Quiz;
