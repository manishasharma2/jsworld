//Creating new element in this

const div = document.createElement('div')
console.log(div);


//Adding properties in that created div element

div.className = 'main'
div.id = Math.round(Math.random() * 10 + 1)

console.log(div.id);

div.setAttribute('title', 'generated-title')
div.style.backgroundColor = 'green'
div.style.padding = '10px'
// div.innerText = "Chai aur code"
const text = document.createTextNode("chai aur code")
div.appendChild(text)

//Attach the created element on documnet

document.body.appendChild(div)