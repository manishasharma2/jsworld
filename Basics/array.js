const myArr = [1, 23, 4, 4, 6, 6, 82, 25, 2];
// console.log(myArr)

const marvel_heros = ["Thor", "Ironman", "Hulk"]
const dc_heros = ["batman", "Superman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// const all_heros = marvel_heros.concat(dc_heros)
const all_heros = [...marvel_heros, ...dc_heros]
// console.log(all_heros)

const mixArr = [2, 2, 5, 6, [7, 4, [9, 38, 2, 6, 8, [0, 9, 6]]]];
const flatArr = mixArr.flat(Infinity);
// console.log(flatArr);

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({ name: "Hitesh" }))//Interesting Array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));