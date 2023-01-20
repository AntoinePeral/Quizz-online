const CoreModel = require("./CoreModel");

class Tag extends CoreModel{
    #name;

    constructor(objet){
        super(objet);
        this.#name = objet.name;
    }

    get name() {
        return this.#name;
    }

    set name(value){
        if(typeof value !== 'string'){//On vérifie si value n'est pas une string
            // Ici throw new Error va servir à "balancer" une erreur
            // C'est a dire que si la condition au dessus est remplie
            // On arrête le code à ce niveau
            throw new Error('La valeur newName doit être une string.');
        }
        // Si le throw est activé, alors ce traitement ne va pas s'effectuer
        this.#name = value;
    }

}

module.exports = Tag;

//Un exemple pour montrer comment on instancie un nouveau tag minouche
//const minouche = new Tag({id: 1, name: "Minouche"})
