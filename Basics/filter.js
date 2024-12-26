const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

// const newNums = nums.filter((num) => num > 5)
// console.log(newNums);

// const newNums = nums.filter((num) => {
//     num > 5//No explicit return statement is here Because we are using {} here 
// })

let newNums = nums.filter((num) => num > 5)


// console.log(newNums);
//doing the same thing using for each

const newArr = []

nums.forEach((num) => {
    if (num > 4) {
        newArr.push(num)
    }
})
// console.log(newArr);

// const userBooks =  Books.filter((book)=>( book.publish > 2005))
// newNums = nums.map((num) => num + 10)
// console.log(newNums)

//chaining of  methods

newNums = nums.map((num) => num * 10).map((num) => num + 1).filter((num) => num > 50);
console.log(newNums);
