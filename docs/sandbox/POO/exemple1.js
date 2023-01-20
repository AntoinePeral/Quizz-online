const harry = { //Un objet classique, avec une méthode sayHi()
    firstName: "Harry",
    lastName: "Potter",
    age: 11,
    sayHi() {
        console.log(`Je suis ${harry.firstName} ${harry.lastName} et j'ai ${harry.age} ans.`)
    }
}

const hermione = {//Un autre objet, même méthode
    firstName: "Hermione",
    lastName: "Granger",
    age: 11,
    sayHi() {
        console.log(`Je suis ${hermione.firstName} ${hermione.lastName} et j'ai ${hermione.age} ans.`)
    }
}


harry.sayHi();//On appelle les méthodes de chaque objet
hermione.sayHi();
