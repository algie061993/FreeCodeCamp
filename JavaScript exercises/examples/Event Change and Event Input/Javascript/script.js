const colorSelect = document.getElementById("color-select");
const pizzaCheckbox = document.getElementById("pizza-checkbox");
const nameInput = document.getElementById("name-input-changeEvent");
const nameInputInput = document.getElementById("name-input-inputEvent");
const outputDiv = document.getElementById("output");
const inputOutputDiv = document.getElementById("input-output");

// Add event listener to color select
colorSelect.addEventListener("change", () => {
  outputDiv.innerText = `You selected ${colorSelect.value}`;
});

// Add event listener to pizza checkbox
pizzaCheckbox.addEventListener("change", () => {
  outputDiv.innerText = `You ${
    pizzaCheckbox.checked ? "like" : "don't like"
  } pizza`;
});

// Add event listener to name input for change event
nameInput.addEventListener("change", () => {
  outputDiv.innerText = `You entered ${nameInput.value}`;
});

// Add event listener to name input for input event
nameInputInput.addEventListener("input", () => {
  inputOutputDiv.innerText = `You typed ${nameInputInput.value}`;
});
