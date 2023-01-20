const dataMapper = require('./dataMapper');

//Avantage du dataMapper : On ne se préoccupe pas du SGBD sous-jacent dans le fichier test.js
//La requête SQL est cachée dans le dataMapper
//On a bien un bon SoC (Separation of Concerns)

async function test(){
    const tags = await dataMapper.getAllTags();
    console.log(tags); //On affiche la liste des tags retournée par notre dataMapper
    //dataMapper.getAllTags() nous retourne les données brutes de notre BDD

    //On peut aussi essayer de récupérer des données wrappées par notre model User

    const user = await dataMapper.getUserById(1); //Cette méthode va nous retourner les données wrappées par notre model User
    console.log(user); //On affiche nos données wrappées

    //On peut tester si nos données sont wrappées en faisant :
    console.log(user.fullname); //On utilise le getter "fullname" présent dans notre classe User
    //On recevra donc "Jean-Claude Vandame" dans notre log

}
test();
