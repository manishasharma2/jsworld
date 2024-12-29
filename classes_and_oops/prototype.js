let myName = 'Manisha    '
// console.log(myName.trueLength);


let heros = ['thor', 'hulk', 'ironman']
let heropower = {
    thor: 'Hammer',
    hulk: 'muscular',
    ironman: 'intelligent',

    getthorPower: function () {
        console.log(`Thor ki sakti h uska ${this.thor}`);
    }
}
Object.prototype.hitesh = function () {
    console.log("hitesh is present in all objects");
}
Array.prototype.heyHitesh = function () {
    console.log("hitesh is present in array object")
}
// heropower.hitesh()
heros.hitesh()
heros.heyHitesh()
// heropower.heyHitesh()
const User = {
    name: "chai",
    email: "chai@google.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: true
}
const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport

}
// Teacher.__proto__ = User


///modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUser = 'CHai aur code  '
String.prototype.trueLength = function () {
    console.log(`${this}`)
    // console.log(`${this.name}`)
    console.log(`True length is: ${this.trim().length}`)


}
console.log(anotherUser.trueLength())
'manisha  '.trueLength()