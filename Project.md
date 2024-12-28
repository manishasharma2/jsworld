# Projects related to DOM
## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solultion Code

## Project 1 (Background Changer)

```javascript

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    let color = e.target.id;
    body.style.backgroundColor = color;
  });
});

```

## Project 2 ( BMI Calculator)

``` javascript

const form = document.querySelector('form');
// This use case will give you empty value
// let height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let height = parseInt(document.querySelector('#height').value);
  let weight = parseInt(document.querySelector('#weight').value);
  let result = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = 'Please enter the valid height';
  } else if(weight ==='' || weight < 0 || isNaN(weight)){
    result.innerHTML = "Please enter a valid wight"
  }
  else result.innerHTML = weight / ((height * height)/10000).toFixed(2);
});


```

### Project 3 ( Digital Clock)

```javascript
const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


```
### Project 4 (Guess the number)
``` javascript

```