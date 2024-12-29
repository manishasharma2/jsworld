# Some Advance JS functions

## SetTimeout() and ClearTimeout()

```javascript


    const changeTitle = function () {
        console.log("Title changed")
        document.querySelector('h1').innerHTML = "Chai aur code";
    }
    const changeMe = setTimeout(changeTitle, 2000)

    let btn = document.querySelector('.stop').addEventListener('click', function () {
        console.log('Stop');
        clearTimeout(changeMe)
    })

    
```
## setInterval() and clearInterval() 
### Here the background of the web page is changed continiously and can be stop by clicking a button 'stop' and restarted by button 'start'.

``` javascript

//Generate a random color
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    let idx = Math.floor(Math.random() * 16);
    color += hex[idx];
  }
  return color;
};

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const body = document.querySelector('body');

const changeBg = function () {
  console.log('Color changed');
  let color = randomColor();
  console.log(color);
  body.style.backgroundColor = color;
};
let intervalId ;
startBtn.addEventListener('click', function () {
  if (!intervalId) intervalId = setInterval(changeBg, 1000);
});

stopBtn.addEventListener('click', function () {
  if (intervalId) {
    console.log('Event Stoped');
    clearInterval(intervalId);
    intervalId = null;
  }
});

```

## Project - (Keyboard key check)

```javascript
const insert = document.getElementById('insert');
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class='color'>
    <table>

      <tr>
        <th>Key</th>
        <th>Keycode</th>
        <th>Code</th>
      </tr>
      <tr>
        <th>${e.key === ' ' ? 'Space' : e.key}</th>
        <th>${e.keyCode}</th>
        <th>${e.code}</th>
      </tr>
    </table>
    </div>
  `;
});

```