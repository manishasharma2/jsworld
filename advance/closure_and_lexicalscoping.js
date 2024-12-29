// function init() {
//     let name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     displayName();
// }
// init();


function outer() {
    let username = 'hitesh';
    function innerFun() {
        console.log(username + "  Through inner")
    }
    innerFun()
}
outer()
// console.log(username + "through outer")

//Closure
function makeFunc() {
    const name = "Mozilla";
    function displayName() {
        console.log(name);
    }
    return displayName;
}

const myFunc = makeFunc();
myFunc();
