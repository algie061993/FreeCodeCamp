const colorSelect = document.getElementById("color-select");
const pizzaCheckbox = document.getElementById("pizza-checkbox");
const nameInput = document.getElementById("name-input");
const outputDiv = document.getElementById("output");

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

// Add event listener to name input
nameInput.addEventListener("change", () => {
  outputDiv.innerText = `You entered ${nameInput.value}`;
});

// Note: If you want to listen to input event instead of change event,
// you can replace 'change' with 'input' in the above code.
