const modelsLib = {
    stringValidator: (value, modelName, propertyName) => {
        if (typeof value !== 'string'){
            throw new Error(`${modelName}.${propertyName} doit être une chaine de caractères !`);
        }
    }
};


module.exports = modelsLib;
