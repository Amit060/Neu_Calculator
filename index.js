// Get the input element
const input = document.getElementById('number');

// Add click event listeners to all buttons
const buttons = document.getElementsByClassName('grid-item');
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', handleButtonClick);
}

// Function to handle button clicks
function handleButtonClick(event) {
  const buttonValue = event.target.textContent;
  const currentValue = input.value;

  switch (buttonValue) {
    case '=':
      // Evaluate the expression and update the input value
      input.value = eval(currentValue);
      break;
    case 'C':
      // Clear the input value
      input.value = '';
      break;
    default:
      // Append the button value to the input value
      input.value += buttonValue;
      break;
  }
}
