let nums = [1, 2, 3]

let mewNums = nums.reduce((acc, crrval) => {
    console.log(`Accumulator value -> ${acc} Current value -> ${crrval}`);

    return acc + crrval
}, 0)

// console.log(mewNums);

const shoppingCard = [
    {
        itemName: 'Js Course',
        price: 999
    },
    {
        itemName: 'Python Course',
        price: 1999
    },
    {
        itemName: 'Java Course',
        price: 899
    },
    {
        itemName: 'DSA Course',
        price: 9999
    },
]

let totalPrice = shoppingCard.reduce((acc, item) => (item.price + acc), 0)
console.log(totalPrice);
