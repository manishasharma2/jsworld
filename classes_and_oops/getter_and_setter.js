//modern way of using getters and setters
class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    get password() {
        // return this._password.toUpperCase();
        return `${this._password}mona`
    }
    set password(value) {
        this._password = value
    }
    get email() {
        return this._email.toLowerCase()
    }
    set email(mail) {
        this._email = mail
    }
}
//maximum call stack size exceeded-- constructor and setter dono hi same value ko set kar rhe h
const chai = new User('ch@!@gamilc.comm', '12@d')
// console.log(chai.password)
// console.log(chai.email)


///Traditional way of doing same getter and setter

function Tuser(email, password) {
    this._email = email
    this._password = password
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toLowerCase()
        },
        set: function (value) {
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this._password = value
        }
    })
}
let tea = new Tuser('tea@tea.com', 'TEADDASDF@#$2')
// console.log(tea.email)


//Object based setter and getter

const Nuser = {
    _email: 'mona@gami.com',
    _password: "MOna@340",

    get email() {
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value
    }
}
const coff = Object.create(Nuser)
console.log(coff._email);
