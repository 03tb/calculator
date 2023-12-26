const container = document.querySelector('#container');

const display = document.querySelector('#display');

// simple calculation logic

let userInput;
let displayValue;
let result;

function addFunction(userInput, displayValue) {
    return userInput + displayValue;
}

function subtractFunction(userInput, displayValue) {
    return userInput - displayValue;
}

function multiplyFunction(userInput, displayValue) {
    return userInput * displayValue;
}

function divideFunction(userInput, displayValue) {
    return userInput / displayValue;
}

function operate(type, userInput, displayValue) {

    switch (type) {
        case 'add':
            result = addFunction(userInput, displayValue);
            console.log(result);
            break;
        case 'subtract':
            result = subtractFunction(userInput, displayValue);
            console.log(result);
            break;
        case 'multiply':
            result = multiplyFunction(userInput, displayValue);
            console.log(result);
            break;
        case 'divide':
            result = divideFunction(userInput, displayValue);
            console.log(result);
            break;
    }
}


// display changing
// need to implement input displayed as string in display like 7 + 7 + 7

let tempValue = '';

const currentInput = document.querySelector('#currentInput');

const numberButton = document.querySelectorAll('.maths');

numberButton.forEach((button) => {
    button.addEventListener ('click', () => {
        const numberValue = button.getAttribute('data-number');
        tempValue = tempValue.concat("", numberValue);
        displayValue = parseInt(tempValue);
        currentInput.textContent = displayValue;
        display.appendChild(currentInput);
    })
})

// buttons implementation

const operatorButton = document.querySelectorAll('.operators')

let type;

const resultDisplay = document.querySelector('#result');

operatorButton.forEach((button) => {
    button.addEventListener ('click', () => {
        if (button.textContent == "/") {
            type = 'divide'
            userInput = displayValue; 
            tempValue = ""; //reset temp and display value for next string
            displayValue ="";
        } else if (button.textContent == "*") {
            type = 'multiply'
            userInput = displayValue; 
            tempValue = ""; //reset temp and display value for next string
            displayValue ="";
        } else if (button.textContent == "-") {
            type = 'subtract'
            userInput = displayValue; 
            tempValue = ""; //reset temp and display value for next string
            displayValue ="";
        } else if (button.textContent == "+") {
            type = 'add'
            userInput = displayValue; 
            tempValue = ""; //reset temp and display value for next string
            displayValue ="";
        } else if (button.textContent == "=") {
            displayValue = parseInt(displayValue);
            operate(type, userInput, displayValue);
            userInput = result;
            displayValue = result;
            tempValue = "";
            
        }
        
    })
})

function storeValue () {
    operate(type, userInput, displayValue);
}


// clear button

const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', () => {
    currentValue = "";
    currentInput.textContent = '0';
    display.appendChild(currentInput);
})