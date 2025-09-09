// JavaScript code to count the number of vowels in a word using a for loop
const inputVowelsForLoop = document.getElementById("wordInputForLoop");
const buttonVowelsForLoop = document.getElementById("countButtonForLoop");
const resultVowelsForLoop = document.getElementById("resultForLoop");

let countForLoop = 0; // Store the current vowel count
let wordForLoop = ""; // Store the current valid input
buttonVowelsForLoop.disabled = true; // Disable the button initially

// Function to count the number of vowels in a word
function countVowelsForLoop(word) {
  // Loop through the word and count the number of vowels
  for (let i = 0; i < word.length; i++) {
    // Check if the current character is a vowel
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      countForLoop++; // Increment the vowel count
    }
  }
  return countForLoop; // Return the vowel count
}

// Function to validate the input
function validateInputForLoop(word) {
  // Check if the input is empty
  if (word.trim() === "" || word === null || word === undefined) {
    return "Please enter a word"; // Input is empty
  } else if (!isNaN(word)) {
    return "Please enter a valid word"; // Check if the input is a number
  } else if (word.includes(" ")) {
    return "Please enter a single word"; // Check if the input contains spaces
  } else if (word.length > 25) {
    return "Please enter a word with less than 25 characters"; // Check if the input is too long
  } else if (word.length < 3) {
    return "Please enter a word with more than 3 characters"; // Check if the input is too short
  } else if (!/^[a-zA-Z]+$/.test(word)) {
    return "Please enter a valid word"; // Check if the input contains only letters
  } else {
    return null; // Input is valid
  }
}

// Event listener for input
inputVowelsForLoop.addEventListener("input", () => {
  const validationMessage = validateInputForLoop(inputVowelsForLoop.value); // Validate input
  // If input is invalid, display error message
  if (validationMessage) {
    resultVowelsForLoop.textContent = validationMessage; // Show validation message
    resultVowelsForLoop.style.color = "red"; // Set text color to red for errors
    buttonVowelsForLoop.disabled = true; // Disable button
    wordForLoop = ""; // Clear the invalid input
  } else {
    buttonVowelsForLoop.disabled = false; // Enable button
    wordForLoop = inputVowelsForLoop.value.toLowerCase(); // Store valid input and convert to lowercase
    resultVowelsForLoop.style.color = ""; // Reset text color
    console.log(wordForLoop);
    resultVowelsForLoop.textContent = "The result will show here."; // Reset result text
  }
});

buttonVowelsForLoop.addEventListener("click", () => {
  countForLoop = countVowelsForLoop(wordForLoop); // Count the number of vowels
  resultVowelsForLoop.textContent = `The number of vowels in ${wordForLoop} is ${countForLoop}`; // Display the result
});

// JavaScript code to count the number of vowels in a word using built-in methods match() fuction
const inputVowelsBuiltIn = document.getElementById("wordInputIncludes");
const buttonVowelsBuiltIn = document.getElementById("countButtonIncludes");
const resultVowelsBuiltIn = document.getElementById("resultForIncludes");

let countBuiltIn = 0; // Store the current vowel count
let wordBuiltIn = ""; // Store the current valid input
buttonVowelsBuiltIn.disabled = true; // Disable the button initially

// Function to count the number of vowels in a word using built-in methods match() fuction
function countVowelsBuiltIn(word) {
  const wordToLowerCase = word; // store the word in lowercase
  const vowels = wordToLowerCase.match(/[aeiou]/gi); // match all the vowels

  countBuiltIn = vowels ? vowels.length : 0; // if vowels is null return 0 else return the length of vowels and update the count
  return countBuiltIn; // Return the vowel count
}

inputVowelsBuiltIn.addEventListener("input", () => {
  const validationMessage = validateInputForLoop(inputVowelsBuiltIn.value); // Validate input
  if (validationMessage) {
    resultVowelsBuiltIn.textContent = validationMessage; // Show validation message
    resultVowelsBuiltIn.style.color = "red"; // Set text color to red for errors
    buttonVowelsBuiltIn.disabled = true; // Disable button
    wordBuiltIn = ""; // Clear the invalid input
  } else {
    buttonVowelsBuiltIn.disabled = false; // Enable button
    wordBuiltIn = inputVowelsBuiltIn.value.toLowerCase(); // Store valid input and convert to lowercase
    resultVowelsBuiltIn.style.color = ""; // Reset text color
    console.log(wordBuiltIn);
    resultVowelsBuiltIn.textContent = "The result will show here."; // Reset result text
  }
});

buttonVowelsBuiltIn.addEventListener("click", () => {
  countBuiltIn = countVowelsBuiltIn(wordBuiltIn); // Count the number of vowels
  resultVowelsBuiltIn.textContent = `The number of vowels in ${wordBuiltIn} is ${countBuiltIn}`; // Display the result
});
