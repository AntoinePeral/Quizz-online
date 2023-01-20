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

    /*boostEngine(valeur){
        this.enginePower = this.enginePower + valeur;
        if(this.enginePower > 2000){
            this.enginePower = 2000
        }
    }*/

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

const ferrari = new Vehicule(4, 600);

ferrari.enginePower = 1000;




