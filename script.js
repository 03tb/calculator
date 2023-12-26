const container = document.querySelector('#container');

const display = document.querySelector('#display');

// method to return numbers pressed in maths class

let currentValue = "";
let numberValue;
let parsedValue;

const numberButton = document.querySelectorAll('.maths');
const currentInput = document.querySelector('#currentInput');

numberButton.forEach((button) => {
    button.addEventListener ('click', () => {
        const numberValue = button.getAttribute('data-number');
        currentValue = currentValue.concat("", numberValue);
        console.log(currentValue);
        currentInput.textContent = currentValue;
    })
    display.appendChild(currentInput);
})



function parseCurrentValue(currentValue) {
    parsedValue = parseInt (currentValue)
}

const equalsButton = document.querySelector('.equals');

equalsButton.addEventListener('click', () => {  
    parseCurrentValue(currentValue);
    console.log('this is the parsed value' + parsedValue);
})