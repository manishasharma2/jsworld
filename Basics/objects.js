//Singleton object
// Object.create();


//Object Laterals
const mySym = Symbol("Key1")
// console.log(typeof mySym)
const JsUser = {
    name: "Manisha",
    "FullName": "Manisha Sharma",
    age: 20,
    [mySym]: "mykey1",
    location: "Mathua",
    email: "mona@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// Object.freeze(JsUser);

// console.log(JsUser.name)
// console.log(JsUser.FullName)
// console.log(JsUser)

// console.log(JsUser.email)
// console.log(JsUser["email"])

JsUser.greeting = function () {
    console.log(`Hello ${this.name} to the code world!!`)
}

// JsUser.greeting();

// **********************************************************************************


const tinderUser1 = new Object();///this is a singleton object
const tinderUser = {} ///This is a non singleton object

tinderUser.id = '1234'
tinderUser.name = "Sunny"
tinderUser.isLoggedIn = false
// console.log(tinderUser)

const regularUser = {
    email: "user@gamil.ocm",
    FullName: {
        userFirstName: "Manisha",
        userLastName: "sharma"
    }
}
// console.log(regularUser.FullName.userLastName);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: 'c',
    4: 'd'
}
// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = { ...obj1, ...obj2 }
Object.keys((regularUser))
Object.values((regularUser))
Object.entries((regularUser))
// console.log(obj3)

// console.log(regularUser.hasOwnProperty('isLoggedin'))

// **********************************__Object de-Structuring__************************************************


const course = {
    name: 'Js in hindi',
    price: 999,
    instructor: "Hitesh"
}

const { instructor: courseInstrutor } = course
console.log(courseInstrutor)