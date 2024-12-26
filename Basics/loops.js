const arr = [1, 2, 3, 5]
//For of Loop
// for (const num of arr) {
//     console.log(num)
// }
// const greetings = "Hello World!!"
// for (const greet of greetings) {
//     // console.log(greet)
// }


//Maps stores key value pairs .. stores unique values
const map = new Map()
map.set('IN', "India")
map.set("US", "United State of America")
map.set('PK', "Pakistan")

// for (const key in map) {
//     console.log(key)
// }//Maps are not iterable using for in loops
// console.log(map)

// for (const [key, value] of map) {
//     console.log(key, '--', value)
// }

//Objects are not iterable but maps are iterable


const myObj = {
    js: 'javascript',
    cpp: "C++",
    py: "Python"
}

// for (const key in myObj) {
//     console.log(`${key} -->  ${myObj[key]}`)
// }

const ProgrammingLang = ["python", 'java', 'cpp', 'js'];
//Arrays keys are considered as its indexes
// for (const key in ProgrammingLang) {
//     console.log(ProgrammingLang[key])
// }


//foreach looooppp
// array.forEach(element => {


// });

// ProgrammingLang.forEach((element) => {
//     console.log(element)
// })

// ProgrammingLang.forEach(function (ele) {
//     console.log(ele)
// })

function PrintMe(item) {
    console.log(item)
}

// ProgrammingLang.forEach(PrintMe)

// ProgrammingLang.forEach((item, index, arr) => {
//     console.log(item, index, arr)
// })

//*********************Array of objects [{},{},{}]

const codingLang = [
    {
        name: 'javascript',
        extention: 'js'
    },
    {
        name: 'python',
        extention: 'py'
    },
    {
        name: 'C++',
        extention: 'cpp'
    }
]

// codingLang.forEach((item) => {
//     console.log(item.extention)
// })