//ES6

class user {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }
    //here no need to use function keyword 
    // we call js function in the class as methods
    encryptPassword() {

        return `${this.password}abc`;
    }

    changeUsername(username) {
        return `Modified user name is:  ${this.username.toUpperCase()}`;
    }
}

// let chai = new user('chai', 'chai@gamil.com', 'ch@!');
// console.log(chai)
// console.log(chai.changeUsername())


//Behind the scence

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encryptPassword = function () {
    return `${this.password}abc`;

}
User.prototype.changeUsername = function () {
    return `Modified user name is:  ${this.username.toUpperCase()}`;

}

let tea = new User('tea', 'tea@gmail.com', 'te@');
console.log(tea)