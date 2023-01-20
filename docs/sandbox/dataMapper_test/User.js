class User {

    id;
    email;
    password;
    firstname;
    lastname;

    constructor(obj) {
        this.id = obj.id;
        this.email = obj.email;
        this.password = obj.password;
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;
    }
    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}

module.exports = User;
