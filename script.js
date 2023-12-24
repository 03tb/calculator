const container = document.querySelector('#container');

let screen = document.getElementById('screen');

let currentNumber = [];

const numberButtons = document.querySelectorAll('.maths');

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        const number = button.getAttribute('data-number');
        currentNumber.push(number);
        updateScreen();
    })
})

function updateScreen(){
    screen.textContent = currentNumber.join('');
}

const actionButtons = document.querySelectorAll('.maths');

actionButtons.forEach(button => {
    button.addEventListener("click", () => {
        const action = button.getAttribute('data-action');
        console.log(`${action} pressed`);
    })
})

