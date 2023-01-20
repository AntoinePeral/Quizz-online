const validator = require("email-validator");
const CoreModel = require("./CoreModel");
const modelsLib = require('./modelsLib');

class User extends CoreModel{
    firstname;
    lastname;
    email;
    password;

    constructor(objet){
        super(objet);

        modelsLib.stringValidator(objet.firstname, "user" ,"firstname");
        this.firstname = objet.firstname;

        modelsLib.stringValidator(objet.lastname, "user", "lastname");
        this.lastname = objet.lastname;

        if(!validator.validate(objet.email)){
            throw new Error("L'email est invalide !");
        }
        this.email = objet.email;
        this.password = objet.password;
    }
}

module.exports = User;


/* Si on ne valide pas les données dans notre constructeur, on peut se
 retrouver à créer des users qui ne correspondent pas vraiment au standard
 qu'on souhaite forcer

Ici, notre JCVD veut créer un User, mais il utilise des informations qui ne seraient pas valides
Pour empêcher ce comportement, on va mettre en place des validateurs dans notre constructeur


const jcvdInfos = {
    id: "un",
    firstname: 12,
    lastname: true,
    email: "Jean Claude Van Damme",
    password: true
}
const jcvd = new User(jcvdInfos)
*/



