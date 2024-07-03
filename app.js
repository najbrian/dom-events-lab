/*-------------------------------- Constants --------------------------------*/
/*-------------------------------- Variables --------------------------------*/
let firstNumber = '';
let secondNumber = '';
let currentOperator = null;
let resetDisplay = false;


/*------------------------ Cached Element References ------------------------*/
const calculator = document.querySelector('#calculator');
const displayMessage = document.querySelector('.display');
/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', handleClick);
/*-------------------------------- Functions --------------------------------*/

function handleClick(evt) {
  if(evt.target.classList.contains('number')) {
    handleNumberClick(evt.target)
  } else if (evt.target.classList.contains('operator')) {
    handleOperatorClick(evt.target);
  } else if (evt.target.classList.contains('equals')) {
    handleEqualsClick();
  } else if (evt.target.innerText === 'C') {
    handleClearClick();
  }
};

function handleNumberClick(evt) {
  if(resetDisplay) {
    displayMessage.textContent = '';
    resetDisplay = false;
  }
  displayMessage.textContent += evt.innerText;
};

function handleOperatorClick(evt) {
  if(evt.innerText === 'C') {
    handleClick();
  } else {
    firstNumber = display.textContent;
    currentOperator = evt. innerText;
    resetDisplay = true;
  }
};

//used chatgpt to help me correct some of the errors I was originally receiving on this function
function handleEqualsClick() {
  if(currentOperator && firstNumber !== '') {
    secondNumber = display.textContent;
    display.textContent = calculate(firstNumber, secondNumber, currentOperator);
    firstNumber = calculate(firstNumber, secondNumber, currentOperator);
    secondNumber = '';
    currentOperator = null;
    resetDisplay = true;
  }
}



function handleClearClick() {
  firstNumber = '';
  secondNumber = '';
  currentOperator = null;
  resetDisplay = false;

}

function calculate(num1, num2, operator) {
const firstNum = num1.innerText;
const secondNum = num2.innerText;

if(operator === '+') return num1 + num2;
if(operator === '-') return num1 - num2;
if(operator === '*') return num1 * num2;
if(operator === '/') return num1 / num2;

return 0;
};