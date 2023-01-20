function makePerson(firstName, lastName, age){ //Design pattern : Factory
    const person = {};// On initialise notre objet person

    person.firstName = firstName;//On glisse les valeurs passées en paramètre de makePerson() dans notre objet
    person.lastName = lastName;
    person.age = age;

    person.sayHi = () => { //On créé une méthode qu'on glisse dans person.sayHi
        console.log(`Je suis ${person.firstName} ${person.lastName} et j'ai ${person.age} ans.`)
    }

    return person//On retourne un objet person 
}

//L'objet person retourné ressemblera aux objets de l'exemple 1


const harry = makePerson("Harry", "Potter", 11); // => Si on avait pas utilisé 
harry.sayHi();

/*------------------------------------------
Ici on s'amuse à passer la fonction makePerson() dans une méthode PersonFactory.make() (facultatif)

const PersonFactory = { 
    make: makePerson 
}
*/


//On peut donc utiliser cette méthode comme suit :

//const harry = PersonFactory.make("Harry", "Potter", 11); //On utilise notre méthode pour créer une personne !
