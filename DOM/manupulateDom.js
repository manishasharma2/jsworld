function addLanguage(langName) {
    const li = document.createElement('li')
    li.innerHTML = `${langName}`
    document.querySelector('.languages').appendChild(li)
}

addLanguage('Pyhton')
addLanguage('Typescript')



//...... Optimization .......

function optiAddLanguage(lang) {
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(lang))
    document.querySelector('.languages').appendChild(li)
}
// optiAddLanguage("Go lang")
// optiAddLanguage('Ruby')


//Edit the values

const secLang = document.querySelector('li:nth-child(2)')
// console.log(secLang.innerHTML);

const newLi = document.createElement('li')
newLi.textContent = " MOJO"
secLang.replaceWith(newLi)

//Task ---> replace first Javascript with typescript

const firstLang = document.querySelector('li')
const newLang = document.createElement('li')
newLang.textContent = 'TypeScript'
firstLang.replaceWith(newLang)

//Another way of doing the same thing
// const firstLan = document.querySelector('li')
// firstLan.outerHTML = '<li>TypeScript<li>'


//remove the element

const lastChild = document.querySelector('li:last-child')
lastChild.remove()