function multipleBy5(num) {
    this.num = num
    return num * 5;
}
multipleBy5.power = 2
console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype) // this prototype gives some methods and properties

function createUser(username, score) {
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function () {
    this.score++;
    console.log(`Incremented score of ${this.username} is : ${this.score}`)
}// ye nai properties jabhi add hongi, tab new object ke through new instance create hoga

createUser.prototype.printMe = function () {
    console.log(`score of ${this.username} is: ${this.score}`)
}


const chai = new createUser("chai", 20);
const tea = new createUser('tea', 100);

chai.increment();
chai.printMe();
tea.increment();
tea.printMe();