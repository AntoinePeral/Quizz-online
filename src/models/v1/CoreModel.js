class CoreModel {
    #id;

    constructor(objet){
        this.#id = objet.id;
    }

    get id() {
        return this.#id;
    }
}

module.exports = CoreModel;
