const CoreModel = require('./CoreModel');

class Question extends CoreModel { // on fait hériter à notre class Question les propriétés de la classe mère CoreModel
    description;
    anecdote;
    wiki;
    level_id;
    quiz_id;
    answer_id;

    constructor(data){
        super(data);

        this.description = data.description;
        this.anecdote = data.anecdote;
        this.wiki = data.wiki;
        this.level_id = data.level_id;
        this.quiz_id = data.quiz_id;
        this.answer_id = data.answer_id;
    }
}

module.exports = Question;


/* Ici on aura besoin de passer les clés étrangères puisque
    notre modèle en aura besoin pour par exemple les enregistrer
    en BDD plus tard


const data = {
    id:1,
    description: "",
    anecdote: "",
    wiki: "",
    level_id: 1,
    quiz_id: 1,
    answer_id: 1
}

const nouvelleQuestion = new Question(data)
*/
