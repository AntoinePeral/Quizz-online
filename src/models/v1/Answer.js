const CoreModel = require("./CoreModel");

class Answer extends CoreModel{
    description;
    answer_Id;

    constructor(objet){
        super(objet);

        this.description = objet.description;
        this.answer_Id = objet.answer_Id;
    }
}

module.exports = Answer;
