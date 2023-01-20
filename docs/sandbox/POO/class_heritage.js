class Vehicule {
    nbOfWheels;
    #enginePower;
    #isStarted; //isStarted != #isStarted

    constructor(nbOfWheels, enginePower){
        this.nbOfWheels = nbOfWheels;
        this.#enginePower = enginePower;
        this.#isStarted = false;
    }

    start() {
        if(!this.#isStarted){
            this.#isStarted = true;
        }
        else{
            console.log("Véhicule déjà en marche");
        }
    }

    stop() {
        if(this.#isStarted){
            this.#isStarted = false;
        }
        else{
            console.log("Véhicule déjà éteint");
        }
    }

    makeNoise() {
        if(this.#isStarted === true){
            console.log("Vroooom");
        }
    }

    toString() {
        let isStartedString;
        if(this.#isStarted){
            isStartedString = "est démarrée";
        }
        else {
            isStartedString = "n'est pas démarrée";
        }
        return `Véhicule à ${this.nbOfWheels} roues, de puissance ${this.enginePower}, ${isStartedString}`;
    }

    boostEngine(valeur){
        this.enginePower = this.enginePower + valeur;
        if(this.enginePower > 2000){
            this.enginePower = 2000;
        }
    }

    get getVehiculeState() {
        return this.#isStarted;
    }

    set enginePower(valeur) {
        if(typeof valeur !== "number"){
            throw new Error("L'enginePower doit être un nombre !");
        }
        this.#enginePower = this.#enginePower + valeur;
        if(this.#enginePower > 2000){
            this.#enginePower = 2000;
        }
        console.log(this.#enginePower);
    }


}



class Moto extends Vehicule {
    hasTopCase;

    constructor(enginePower, hasTopCase){
        super(2, enginePower);
        this.hasTopCase = hasTopCase;
    }
}


const harley = new Moto(115, false);

console.log(harley instanceof Moto);
console.log(harley instanceof Vehicule);

console.log(harley);















/*class Car extends Vehicule {  //class Fille extends Mere
    constructor(enginePower){ //Ici on peut récupérer le enginePower envoyé par new Car(100)
        super(4, enginePower)
    }
}


const clio = new Car(100);*/
