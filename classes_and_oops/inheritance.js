class User {
    constructor(username) {
        this.username = username
    }

    LogMe() {
        console.log(`Username is : ${this.username}`);
    }
}
class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email;
        this.password = password;
    }
    addCourses() {
        console.log(`A new course was added by ${this.username}`);
    }
}

let user2 = new Teacher('Tea', 'Tea@gamil.com', '12@')
user2.addCourses()
user2.LogMe()
// console.log(user2)
// console.log(user2 instanceof Teacher)
// console.log(user2 instanceof User)

//Static Properties

// kisi bhi  method or property ki access ko bound karne ke liye static use karte h 
class user {
    constructor(username) {
        this.username = username
    }

    LogMe() {
        console.log(`Username is : ${this.username}`);
    }

    static createId() {
        return '123';
    }
}
// let hue = new user();
// console.log(hue.createId())
class student extends user {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}
let iphone = new Teacher('iphone', 'i@phone.com')
iphone.LogMe()