// JavaScript code to reverse a word using both a for loop
const inputForLoop = document.getElementById("wordInputForLoop");
const buttonForLoop = document.getElementById("reverseButtonForLoop");
const resultForLoop = document.getElementById("result");
let reversedWordForLoop = ""; // Store the current valid input
let reversedWordResultForLoop = ""; // Store the reversed result

// Function to reverse a string using a for loop
function reverseString(str) {
  let reversed = ""; // Initialize an empty string to hold the reversed word
  // Loop through the string backwards and concatenate each character
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // Append the character at index i to the reversed string
  }
  return reversed; // Return the reversed string
}

// Function to validate the input
function validateWord(word) {
  // Check if the input is empty, contains non-letter characters, or is too long/short
  if (word.trim() === "") {
    return "Input cannot be empty.";
  } else if (!/^[a-zA-Z]+$/.test(word)) {
    return "Input must contain only letters.";
  } else if (word.length > 20) {
    return "Input must be less than 20 characters.";
  } else if (word.length < 2) {
    return "Input must be at least 2 characters.";
  } else {
    return null;
  }
}

// Event listener for input and validation for input field
inputForLoop.addEventListener("input", () => {
  const validationMessage = validateWord(inputForLoop.value); // Validate input
  // If input is invalid, display error message
  if (validationMessage) {
    resultForLoop.textContent = validationMessage; // Show validation message
    resultForLoop.style.color = "red"; // Set text color to red for errors
    reversedWordForLoop = ""; // Clear the stored valid input
  } else {
    reversedWordForLoop = inputForLoop.value; // Store valid input
    resultForLoop.textContent = "The result will show here."; // Reset result text
    resultForLoop.style.color = ""; // Reset text color
  }
});

// Event listener for button click to reverse the word
buttonForLoop.addEventListener("click", () => {
  reversedWordResultForLoop = reverseString(reversedWordForLoop); // Reverse the word using the for loop function
  resultForLoop.textContent = `The reversed word for ${reversedWordForLoop} is ${reversedWordResultForLoop}`; // Display the result
});

// JavaScript code to reverse a word using built-in methods like split, reverse, and join
const inputBuiltIn = document.getElementById("wordInputBuiltIn");
const buttonBuiltIn = document.getElementById("reverseButtonBuiltIn");
const resultBuiltIn = document.getElementById("resultBuiltIn");
let reversedWordBuiltIn = ""; // Store the current valid input
let reversedWordResultBuiltIn = ""; // Store the reversed result

// Event listener for input and validation for input field
inputBuiltIn.addEventListener("input", () => {
  const validationMessage = validateWord(inputBuiltIn.value); // Validate input using the same function
  // If input is invalid, display error message
  if (validationMessage) {
    resultBuiltIn.textContent = validationMessage; // Show validation message
    resultBuiltIn.style.color = "red"; // Set text color to red for errors
    reversedWordBuiltIn = ""; // Clear the stored valid input
  } else {
    reversedWordBuiltIn = inputBuiltIn.value; // Store valid input
    resultBuiltIn.textContent = "The result will show here."; // reset result text
    resultBuiltIn.style.color = ""; // Reset text color
  }
});

// Event listener for button click to reverse the word using built-in methods
buttonBuiltIn.addEventListener("click", () => {
  reversedWordResultBuiltIn = reversedWordBuiltIn.split("").reverse().join(""); // Reverse the word using built-in methods
  resultBuiltIn.textContent = `The reversed word for ${reversedWordBuiltIn} is ${reversedWordResultBuiltIn}`; // Display the result
});
