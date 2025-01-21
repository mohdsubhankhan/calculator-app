// Select elements
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');

// Variables to store calculations
let currentValue = '';
let previousValue = '';
let operator = '';

// Update the display
function updateDisplay(value) {
  display.textContent = value || '0';
}

// Handle button click
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    if (!value) return;

    if (!isNaN(value) || value === '.') {
      // Append numbers and decimal points
      currentValue += value;
      updateDisplay(currentValue);
    } else {
      // Operator button clicked
      if (currentValue) {
        previousValue = currentValue;
        currentValue = '';
      }
      operator = value;
    }
  });
});

// Handle equals button
equals.addEventListener('click', () => {
  if (previousValue && currentValue && operator) {
    const num1 = parseFloat(previousValue);
    const num2 = parseFloat(currentValue);

    let result;
    switch (operator) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        result = num1 / num2;
        break;
    }

    currentValue = result.toString();
    operator = '';
    previousValue = '';
    updateDisplay(currentValue);
  }
});

// Handle clear button
clear.addEventListener('click', () => {
  currentValue = '';
  previousValue = '';
  operator = '';
  updateDisplay('0');
});
