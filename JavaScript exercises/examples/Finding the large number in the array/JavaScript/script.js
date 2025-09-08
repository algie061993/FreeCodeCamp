// Finding the largest number in an array using a for loop
const forLoopInput = document.getElementById("for-loop-input");
const forLoopResult = document.getElementById("for-loop-result");
const displayForLoopArray = document.getElementById("for-loop-array");
let arrayOfNumbers = [];
// Getting user input and adding to the array
forLoopInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    arrayOfNumbers.push(Number(forLoopInput.value)); // Convert input to number and add to array
    displayForLoopArray.textContent = `Array: [${arrayOfNumbers.join(", ")}]`; // Display the array
    forLoopInput.value = ""; // Clear input field
    console.log(arrayOfNumbers); // Log the array to the console
  }
  // if the the user enters a number other than 0, clear the warning message
  if (event.value !== 0) {
    forLoopResult.textContent = "";
    forLoopResult.style.color = "black";
  }
});
// Function to find the largest number using a for loop
const findLargestForLoop = (arr) => {
  // Check if the array is empty
  if (arr.length === 0) {
    return null; // or some other default value
  }
  // Initialize largest number to the first element
  let largestNumberForLoop = arr[0]; // Start loop from the first index
  for (let i = 1; i < arr.length; i++) {
    // Compare the current element with the largest number found so far
    if (arr[i] > largestNumberForLoop) {
      // If the current element is larger, update the largest number
      largestNumberForLoop = arr[i];
    }
  }
  return largestNumberForLoop; // Return the largest number found
};

const findButtonForLoop = document.getElementById("for-loop-button-for-loop");

// Event listener for the button to find the largest number
findButtonForLoop.addEventListener("click", () => {
  // Check if the array is empty and display a warning message if it is
  if (arrayOfNumbers.length === 0) {
    forLoopResult.textContent = "Please enter some numbers first.";
    forLoopResult.style.color = "red";
    return;
  }
  // Call the function and display the result
  largestNumberForLoop = findLargestForLoop(arrayOfNumbers);
  forLoopResult.textContent = `The largest number is: ${largestNumberForLoop}`;
  console.log(largestNumberForLoop);
});

const forLoopDialog = document.getElementById("for-loop-dialog");
const openButtonForLoop = document.getElementById("open-for-loop-dialog");
const closeButtonForLoop = document.getElementById("close-for-loop-dialog");

// Event listeners to open the dialog with animation
openButtonForLoop.addEventListener("click", () => {
  forLoopDialog.classList.add("slide-up");
  forLoopDialog.classList.remove("slide-down");
  setTimeout(() => {
    forLoopDialog.show();
  }, 300); // adjust the delay to match the animation duration
});

// Event listeners to close the dialog with animation and reset values
closeButtonForLoop.addEventListener("click", () => {
  forLoopDialog.classList.remove("slide-up");
  forLoopDialog.classList.add("slide-down");
  setTimeout(() => {
    forLoopDialog.close();
  }, 300); // adjust the delay to match the animation duration
  arrayOfNumbers = []; // Reset the array
  displayForLoopArray.textContent = ""; // Clear the displayed array
  forLoopResult.textContent = ""; // Clear the result display
  largestNumberForLoop = null; // Reset the largest number
});

// Finding the largest number in an array using Math.max and spread operator
const mathMaxInput = document.getElementById("max-input");
const mathMaxDisplayArray = document.getElementById("max-array");
const mathMaxResult = document.getElementById("max-result");
let mathMaxArray = [];

// Getting user input and adding to the array
mathMaxInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    mathMaxArray.push(Number(mathMaxInput.value)); // Convert input to number and add to array
    mathMaxDisplayArray.textContent = `Array: [${mathMaxArray.join(", ")}]`; // Display the array
    mathMaxInput.value = ""; // Clear input field
    console.log(mathMaxArray); // Log the array to the console
  }
  // if the the user enters a number other than 0, clear the warning message
  if (event.value !== 0) {
    mathMaxResult.textContent = "";
    mathMaxResult.style.color = "black";
  }
});

// Function to find the largest number using Math.max and spread operator
const findLargestMathMax = (arr) => {
  // Check if the array is empty
  if (arr.length === 0) {
    return null; // or some other default value
  }
  // Use Math.max to find the largest number in the array
  const largestNumberMathMax = Math.max(...arr);
  return largestNumberMathMax; // Return the largest number found
};
const findButtonMathMax = document.getElementById("max-button-max");

// Event listener for the button to find the largest number
findButtonMathMax.addEventListener("click", () => {
  // Check if the array is empty and display a warning message if it is
  if (mathMaxArray.length === 0) {
    mathMaxResult.textContent = "Please enter some numbers first.";
    mathMaxResult.style.color = "red";
    return;
  }
  // Call the function and display the result
  largestNumberMathMax = findLargestMathMax(mathMaxArray);
  mathMaxResult.textContent = `The largest number is: ${largestNumberMathMax}`;
  console.log(largestNumberMathMax);
});

const openButtonMathMax = document.getElementById("open-max-dialog");
const closeButtonMathMax = document.getElementById("close-max-dialog");
const mathMaxDialog = document.getElementById("max-dialog");

// Event listeners to open the dialog with animation
openButtonMathMax.addEventListener("click", () => {
  mathMaxDialog.classList.add("slide-up");
  mathMaxDialog.classList.remove("slide-down");
  setTimeout(() => {
    mathMaxDialog.show();
  }, 300);
});
// Event listeners to close the dialog with animation
closeButtonMathMax.addEventListener("click", () => {
  mathMaxDialog.classList.remove("slide-up");
  mathMaxDialog.classList.add("slide-down");
  setTimeout(() => {
    mathMaxDialog.close();
  }, 300);
  mathMaxArray = []; // Reset the array
  mathMaxDisplayArray.textContent = ""; // Clear the displayed array
  mathMaxResult.textContent = ""; // Clear the result display
  largestNumberMathMax = null; // Reset the largest number
});
