//ye object ke bare m bahyut nhi properties batate h
const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(Math.PI);
// console.log(descriptor);
descriptor.writable = true
// console.log(descriptor);
Math.PI = 4

// console.log(Math.PI);

const chai = {
    name: "ginger-chai",
    price: 200,
    isAvailable: true,

    orderchai: function () {
        console.log("CHai bekar bami")
    }
}
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));
Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== "function") {
        console.log(`${key}: ${value}`)

    }
}