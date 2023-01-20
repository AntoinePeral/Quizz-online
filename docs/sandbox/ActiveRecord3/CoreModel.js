const db = require('./client_db');

class CoreModel {
    #id;

    constructor(objet){
        this.#id = objet.id;
    }

    get id() { return this.#id; }

    static tableName = null; //La valeur de cette propriété sera écrasée par les classe filles
                            //Elle est accessible par la classe fille en faisant 'static tableName = "une valeur par exemple"'

    // ========= Méthodes statiques =========

    static async findAll(){
        const query = `SELECT * FROM "${this.tableName}"`
        const results = await db.query(query);
        const rawRecords = results.rows;
        const wrappedData = rawRecords.map(rawRecord => new this(rawRecord)) // Le constructeur de la classe fille peut-être appelé avec un "new this()"
        return wrappedData;
    }

    /*
    // ========= INSTANCE METHODS ==========

  async insert() {
    const keyValues = Object.entries(this); // Pour garantir que l'ordre est conservé entre les paires keys <-> values.

    const keys = keyValues.map(([key]) => `"${key}"`); // ex : ['"firstname"', '"lastname"', '"email"', '"password"']
    const values = keyValues.map(([, value]) => value); // ex : ['john', 'doe', 'john.doe@oclock.io', '12345'];
    const templates = keyValues.map((_, index) => `$${index + 1}`); // ex : ["$1", "$2", "$3", "$4"]
    const tableName = this.constructor.tableName; // Depuis l'instance, on peut récupérer les propriétés statiques de classe via this.constructor

    const result = await client.query({
      text: `
        INSERT INTO "${tableName}" 
          (${keys.join(", ")})
        VALUES 
          (${templates.join(", ")})
        RETURNING 
          "id", "created_at"
      `,
      values,
    });

    if (result.rowCount === 0) {
      throw new Error(`INSERT ${this.constructor.tableName} operation did not return any id`);
    }

    this.#id = result.rows[0].id;
    this.#created_at = result.rows[0].created_at;
    return this;
  }


  async update() {
    const keyValues = Object.entries(this); // Puisque #id est une propriété privée, elle n'est pas retournée par la fonction `Object.entries` ! Bingo !
    // En revanche, cela implique que les classes filles ne peuvent pas avoir de propriétés privées sans quoi on ne pourra pas les modifier
    // Raison : impossible d'accéder à des propriétés privées dynamiquement, par design : https://github.com/tc39/proposal-private-fields/blob/main/FAQ.md#why-doesnt-thisx-access-the-private-field-named-x-given-that-thisx-does

    const sets = keyValues.map(([key], index) => `"${key}" = $${index + 2}`);
    const values = keyValues.map(([, value]) => value);

    const result = await client.query({
      text: `
        UPDATE 
          "${this.constructor.tableName}"
        SET
          ${sets.join(", ")},
          "updated_at" = NOW()
        WHERE 
          "id" = $1
        RETURNING
          "updated_at"
      `,
      values: [this.#id, ...values],
    });

    if (result.rowCount === 0) {
      throw new Error(`UPDATE ${this.constructor.tableName} operation did not target any row`);
    }

    this.#updated_at = result.rows[0].updated_at;
  }

  async delete() {
    const result = await client.query({
      text: `DELETE FROM "${this.constructor.tableName}" WHERE id = $1`,
      values: [this.#id]
    });

    if (result.rowCount === 0) {
      throw new Error(`DELETE ${this.constructor.tableName} operation did not target any row`);
    }
  }
    */
}
