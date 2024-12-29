// document.getElementById('owl').onclick = function () {
//     alert("owl Clicked")
// }

//attachEvent()
//jQuery - on

// document.getElementById('owl').addEventListener('click', function () {
//     alert("owl clickec")
// }, false)

//Event Object

// document.getElementById('owl').addEventListener('click', function (e) {
//     console.log(e);

// }, false)
//type , timestamp, defaultprevented, target, toElement, srcElement, 
//clientx,clienty, screenx , screeny
//altkey, ctrlkey, keycode


//Event Propogation- 1. Event Bubbling 2. Event Capturing

//Capturing Event
// document.getElementById('images').addEventListener('click', function () {
//     console.log('Clicked Images');

// }, true)


// document.getElementById('owl').addEventListener('click', function () {
//     console.log("owl clickec")
// }, true)

//bubbling Event
// document.getElementById('images').addEventListener('click', function () {
//     console.log('Clicked Images');

// }, false)


// document.getElementById('owl').addEventListener('click', function () {
//     console.log("owl clickec")
// }, false)

document.getElementById('google').addEventListener('click', function (e) {
    console.log("Google Clicked");
    e.stopPropagation();
    e.preventDefault();
})


document.querySelector('#images').addEventListener('click', function (e) {
    let removeIt = (e.target.parentNode);
    // removeIt.remove()
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG')
        removeIt.parentNode.removeChild(removeIt)
}, false)