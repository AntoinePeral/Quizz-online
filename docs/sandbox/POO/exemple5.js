class Person {
    firstName;
    lastName;
    age;
    #isWizard;//Propriété privée !
    //Attention, #isWizard est différent de isWizard !
    //isWizard n'a jamais été déclaré dans notre classe, donc aux yeux de cette classe, la propriété isWizard n'existe pas
    //La classe ne connait que #isWizard

    constructor(firstName, lastName, age, isWizard){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.#isWizard = isWizard;
    }

    sayHi(){
        console.log(`Je suis ${this.firstName} ${this.lastName} et j'ai ${this.age} ans, et je suis une sorcier : ${this.#isWizard}.`);
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    getBirthDate() {
        return 2023 - this.age;
    }


}

const harry = new Person("Harry", "Potter", 11, false);
//const hermione = new Person("Hermione", "Granger", 11, true);
harry.sayHi();
console.log(harry.getFullName());

//const harryName = harry.getFullName();

//console.log(harry.isWizard);

//harry.#isWizard = true; //Impossible de l'appeler ici puisque #isWizard est une propriété privée

//console.log(harry.#isWizard);
