let expression = ""; // To store the entire expression

// Function to append numbers to the display
function appendNumber(number) {
  expression += number;
  updateDisplay();
}

// Function to append operators to the display
function appendOperator(operator) {
  // Prevent adding multiple consecutive operators
  if (expression === "" || /[+\-*/.]$/.test(expression)) return;

  expression += operator;
  updateDisplay();
}

// Function to clear the display
function clearDisplay() {
  expression = "";
  updateDisplay();
}

// Function to update the display
function updateDisplay() {
  document.getElementById("result").value = expression;
}

// Function to calculate the result
function calculate() {
  try {
    // Replace the × and ÷ symbols with * and / for evaluation
    const sanitizedExpression = expression.replace(/×/g, "*").replace(/÷/g, "/");
    
    // Use eval to calculate the result
    const result = eval(sanitizedExpression);
    
    // Update the expression with the result
    expression = result.toString();
    updateDisplay();
  } catch (error) {
    // Handle invalid expressions
    alert("Invalid Expression!");
  }
}

// Function to delete the last character
function appendNumber(number) {
    document.getElementById('result').value += number;
}

function appendOperator(operator) {
    document.getElementById('result').value += operator;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function backspace() {
    let display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let display = document.getElementById('result');
        display.value = eval(display.value);
    } catch (e) {
        alert('Invalid Expression');
    }
}
