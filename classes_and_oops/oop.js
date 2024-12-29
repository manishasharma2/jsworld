//Object Lateral

const user = {
    username: "Meynycha",
    loginCount: 4,
    signedIn: true,

    getUserDetails: function () {
        console.log("Got user details from database");
        // console.log(`${this.username}`)
        console.log(this);

    },
}

const user2 = {
    username: 'Manisha',
    loginCount: 23,
    signedIn: false,

    getUserDetails: function () {
        console.log("Information of user-2 is getted")
    }
}

function User(username, loginCount, signedIn) {
    this.username = username
    this.loginCount = loginCount
    this.signedIn = signedIn

    this.greeting = function () {
        console.log(`Welcome ${this.username}`)
    }
    return this // current object is returned
}

// const userOne =  User("Hitesh", 23, true);
// const userTwo = User("Manav", 21, false);

// console.log(userOne);
// //value of userOne will be override by the value of user two
// console.log(userTwo);

const userOne = new User("Hitesh", 23, true);
const userTwo = new User("Manav", 21, false);

console.log(userOne.constructor)
console.log(userTwo instanceof User) // Check the instace of parent ot not
// console.log(userTwo)

