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
