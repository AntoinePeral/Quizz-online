class Person { //On créé une classe Person (majuscule au début importante, on appelle ça le UpperCamelCase ou aussi PascalCase)
    firstName;//On déclare les propriétés de notre classe
    lastName;
    age;
    couleurPreferee;

    constructor(firstName, lastName, age) {//On glisse les paramètres chargés en ligne 22 => new Person("Harry", "Potter", 11) dans les propriétés de la classe
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    sayHi() { //On ajoute une méthode 
        console.log(`Je suis ${this.firstName} ${this.lastName} et j'ai ${this.age} ans.`)
    }

    addCouleurPreferee(couleur){//On peut en ajouter autant qu'on le souhaite
        this.couleurPreferee = couleur;
    }
}

const harry = new Person("Harry", "Potter", 11); //On créé une personne selon la classe Person : On appelle ça créer une instance de Person

harry.addCouleurPreferee("bleu"); //On peut utiliser les méthodes de cette façon