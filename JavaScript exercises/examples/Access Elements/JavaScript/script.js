// Get the paragraph element using its id
const paragraph = document.getElementById("paragraph");

// Get the button element using its id
const button = document.getElementById("button");

// Add an event listener to the button
button.addEventListener("click", () => {
  // Change the text content of the paragraph element
  paragraph.textContent = "You clicked the button!";
});
