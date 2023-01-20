const harry = { //Ici un objet classique sans méthode
    firstName: "Harry",
    lastName: "Potter",
    age: 11,
}

const hermione = {// Meme chose
    firstName: "Hermione",
    lastName: "Granger",
    age: 11
}

// Cette fois ci on factorise la méthode sayHi() dans une fonction qui se chargera d'afficher les infos des objets
//Ca évite de devoir créer deux fois la même méthode !
function sayHi(wizard) {
    console.log(`Je suis ${wizard.firstName} ${wizard.lastName} et j'ai ${wizard.age} ans.`)
}

sayHi(harry);//On utilise notre fonction, ça marche !
sayHi(hermione);
