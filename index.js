const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');
const clearButton = document.querySelector('.clear');
const equalsButton = document.querySelector('.equals');
let currentInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
