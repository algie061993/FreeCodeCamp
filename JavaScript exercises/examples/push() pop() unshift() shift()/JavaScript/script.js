const wordInput = document.getElementById("word");
const addBtn = document.getElementById("add");
const closeBtn = document.getElementById("close");
const pushBtn = document.getElementById("push");
const modal = document.getElementById("pushModal");
const output = document.getElementById("output");

let arr = []; // Initialize the array
addBtn.disabled = true; // Disable the button initially

// Function to update the array and enable/disable buttons
function updateArray(...buttons) {
  buttons.forEach((button) => (button.disabled = arr.length === 0));
}

// Function to generate a random color
function randomColor() {
  const letters = "0123456789ABCDEF"; // Hexadecimal characters
  let color = "#"; // Initialize the color
  // Loop to generate a random color
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]; // Append a random character
  }
  return color; // Return the generated color
}

// Function to validate the input
function validateWord(word) {
  // Check if the input is empty, contains non-letter characters, or is too long/short
  // errorMessage is an array of objects having message and condition properties
  const errorMessage = [
    {
      message: "Input must contain only letters.",
      condition: !/^[a-zA-Z]+$/.test(word),
    },
    {
      message: "Input must be less than 20 characters.",
      condition: word.length > 20,
    },
    {
      message: "Input must be at least 2 characters.",
      condition: word.length < 2,
    },
    {
      message: "Input cannot be empty.",
      condition: word.trim() === "",
    },
    {
      message: "Name already exists.",
      condition: arr.includes(word),
    },
  ];
  // Loop through the errorMessage array
  for (let i = 0; i < errorMessage.length; i++) {
    // If the condition is true, disable the buttons
    if (errorMessage[i].condition) {
      addBtn.disabled = true; // Disable the add button if the input is invalid
      unshiftAddBtn.disabled = true; // Disable the unshift button if the input is invalid
      return errorMessage[i].message; // Return the error message
    }
  }
  // If the input in the unshift modal is empty, disable the unshift button
  if (arr.length !== 0) {
    unshiftAddBtn.disabled = false; // Enable the unshift button
  } else {
    unshiftAddBtn.disabled = true; // Disable the unshift button
  }
  addBtn.disabled = false; // Enable the add button if the input is valid

  return null; // Return null if the input is valid
}

// Event listener for the push button to open the modal
pushBtn.addEventListener("click", () => {
  modal.showModal();
});

// Event listener for the input field
wordInput.addEventListener("input", (e) => {
  const validationMessage = validateWord(e.target.value); // Validate the input
  // If input is invalid, display error message
  if (validationMessage) {
    document.getElementById("error").textContent = validationMessage; // Display the error message
    document.getElementById("error").style.color = "red"; // Set the text color to red
  } else {
    document.getElementById("error").textContent = ""; // Clear the error message
    document.getElementById("error").style.color = ""; // Reset the text color
  }
});

// Event listener for the add button to add the word
addBtn.addEventListener("click", () => {
  const word = wordInput.value; // Get the input value
  arr.push(word); // Push the word to the array
  console.log(arr);
  const span = document.createElement("span"); // Create a span element
  span.textContent += word; // Add the word to the span
  span.classList.add("box"); // Add a class to the span
  span.style.backgroundColor = randomColor(); // Set the background color
  output.appendChild(span); // Append the span to the output (at the end)
  wordInput.value = ""; // clear the input field
  addBtn.disabled = true; // Disable the add button
  updateArray(popBtn, unshiftBtn, shiftBtn); // Update the array
});

// Event listener for the close button to close the modal
closeBtn.addEventListener("click", () => {
  modal.close(); // Close the modal
  wordInput.value = ""; // Clear the input field
  document.getElementById("error").textContent = ""; // Clear the error message
  document.getElementById("error").style.color = ""; // Reset the text color
});

// Event listener for the pop button
const popBtn = document.getElementById("pop");

popBtn.disabled = true; // Disable the pop button
// Event listener for the pop button to remove the last word
popBtn.addEventListener("click", () => {
  arr.pop(); // Remove the last word in the array
  console.log(arr);
  output.removeChild(output.lastElementChild); // Remove the last word from the output
  updateArray(popBtn, unshiftBtn, shiftBtn); // Update the array
});

// Event listener for the unshift button
const unshiftInput = document.getElementById("wordUn");
const unshiftAddBtn = document.getElementById("addUn");
const unshiftCloseBtn = document.getElementById("closeUn");
const unshiftModal = document.getElementById("unshiftModal");
const unshiftBtn = document.getElementById("unshift");

unshiftBtn.disabled = true; // Disable the unshift button

// Event listener for the unshift button to open the modal
unshiftBtn.addEventListener("click", () => {
  unshiftModal.showModal(); // Show the modal
});

// Event listener for the input field in the unshift modal
unshiftInput.addEventListener("input", (e) => {
  const validationMessage = validateWord(e.target.value); // Validate the input
  // If input is invalid, display error message
  if (validationMessage) {
    document.getElementById("errorUn").textContent = validationMessage; // Display the error message
    document.getElementById("errorUn").style.color = "red"; // Set the text color to red
  } else {
    document.getElementById("errorUn").textContent = ""; // Clear the error message
    document.getElementById("errorUn").style.color = ""; // Reset the text color
  }
});

// Event listener for the add button in the unshift modal
unshiftAddBtn.addEventListener("click", () => {
  const word = unshiftInput.value; // Get the input value frim the unshift modal
  arr.unshift(word); // Unshift the word to the array
  console.log(arr);
  const span = document.createElement("span"); // Create a span element
  span.textContent += word; // Add the word to the span
  span.classList.add("box"); // Add a class to the span
  span.style.backgroundColor = randomColor(); // Set the background color
  output.prepend(span); // Prepend the span to the output (at the beginning)
  unshiftInput.value = ""; // clear the input field
  unshiftAddBtn.disabled = true; // Disable the add button
});

// Event listener for the close button in the unshift modal
unshiftCloseBtn.addEventListener("click", () => {
  unshiftModal.close(); // Close the modal
  unshiftInput.value = ""; // Clear the input field
  document.getElementById("errorUn").textContent = ""; // Clear the error message
  document.getElementById("errorUn").style.color = ""; // Reset the text color
});

// Event listener for the shift button
const shiftBtn = document.getElementById("shift");
shiftBtn.disabled = true; // Disable the shift button
// Event listener for the shift button to remove the first word
shiftBtn.addEventListener("click", () => {
  arr.shift(); // Remove the first word in the array
  console.log(arr);
  output.removeChild(output.firstElementChild); // Remove the first word from the output
  updateArray(popBtn, unshiftBtn, shiftBtn); // Update the array
});
