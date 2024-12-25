function addPrice(...num) {
    return num
}
// console.log(addPrice(23, 234, 64, 34, 900))

const user = {
    name: "manisha",
    age: 20
}

function handleObject(anyObj) {
    console.log(`Username is ${anyObj.name} and age is ${anyObj.age}`)
}

// handleObject(user)
// handleObject({
//     name: "Manisha",
//     age: 20
// })


// Immediately invoked function Expression(IIFE)

(function chai() {
    console.log("CHalo thodi chai pete h :)")
})();

// Arrow function
((name) => {
    console.log("Arrow function, ", name);
})("Manisha")


if (Object.keys(user).length === 0) {
    console.log("Object is empty !")
}
else {
    console.log("Object is not empty")
}