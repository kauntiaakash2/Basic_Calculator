const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentNumber = '';
let previousNumber = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const id = button.id;

        if (id === 'clear') {
            currentNumber = '';
            previousNumber = '';
            operator = '';
            display.value = '';
        } else if (id === 'backspace') {
            currentNumber = currentNumber.slice(0, -1);
            display.value = currentNumber;
        } else if (id === 'equals') {
            calculate();
        } else if (id === 'add' || id === 'subtract' || id === 'multiply' || id === 'divide') {
            operator = id;
            previousNumber = currentNumber;
            currentNumber = '';
        } else {
            currentNumber += button.textContent;
            display.value = currentNumber;
        }
    });
});

function calculate() {
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);

    let result;

    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 0;
    }

    display.value = result;
    currentNumber = result.toString();
    previousNumber = '';
    operator = '';
}