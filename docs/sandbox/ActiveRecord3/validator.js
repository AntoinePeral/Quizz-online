const email_validator = require('email-validator');

const validators = {
    validateEmail: (value, propName) => {
        if(!email_validator.validate(value)){
            throw new Error(`${propName} doit avoir un format valide`);
        }
    },
    validateString: (value, propName) => {
        if(typeof value !== 'string'){
            throw new Error(`${propName} doit être une chaîne de caractères`);
        }
    }
};

module.exports = validators;
