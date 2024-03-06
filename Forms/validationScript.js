/* 
Assignment: Form Validation with Regular Expressions
For this assignment, you will validate a form that includes a single input field for alphanumeric values.
You will use regex to validate the input value and provide feedback to the user based on whether the input matches the required pattern.

Here are the requirements for the assignment:
1. Add JavaScript code to the validateScript.js starter file to handle the following tasks:
    Retrieve the input field element using JavaScript.
    Add an event listener to the form submits an event.
    Implement a function that validates the input value using a regular expression for alphanumeric input.
    Display an error message if the input value is not alphanumeric.
    Prevent the form from submitting if the input value is not alphanumeric.
    Display a confirmation if the input is valid and 'submits' the form.
    *the wcet server is not set up for form processing so the 'submit' action will not actually submit anything.*

2. Test your form by entering alphanumeric and non-alphanumeric values. 
Verify that the error message is displayed correctly for non-alphanumeric input and that the form is not submitted in such cases. 

Grading Rubric:
Retrieve the input field element (10%)
Validate the input value using a regular expression (30%)
Display error message for non-alphanumeric values (15%)
Prevent form submission for non-alphanumeric values (15%)
Display confirmation message upon successful validation and submission (15%)
Link is clickabke and opens in a new window. (15%)
*/

document.getElementById("myForm").addEventListener("submit", function (event) {
  // Prevent form from submitting
  event.preventDefault();
  // Retrieve the input field value
  const input = document.getElementById("inputField");
  const inputValue = input.value;

  // Regular expression pattern for alphanumeric input
  // found the alphanumeric expression here: https://www.tutorialspoint.com/how-to-validate-an-input-is-alphanumeric-or-not-using-javascript
  const lettersValidation = new RegExp(/[a-zA-Z]/);
  const numbersValidation = new RegExp(/[0-9]/);

  // JavaScript code for form validation
  const hasLetters = lettersValidation.test(inputValue);
  const hasNumbers = numbersValidation.test(inputValue);

  // Check if the input value matches the pattern
  if (hasLetters && hasNumbers) {
    errorMessage.textContent = "";
    // Valid input: display confirmation and submit the form
    alert("Form submitted");
  } else {
    const errorMessage = document.getElementById("errorMessage");
    // Invalid input: display error message
    errorMessage.textContent = "Please enter an alphanumeric value";
  }
});
