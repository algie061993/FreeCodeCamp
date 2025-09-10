const output = document.getElementById("output");
let names = []; // Array to store names

// Javascript code for opening a modals
const addModalBtn = document.getElementById("add-name");
const closemodalBtn = document.getElementById("closeAddModal");
const saveAddModalBtn = document.getElementById("addAddModal");
const addDialog = document.getElementById("addModal");

//Event listeners to open modals
addModalBtn.addEventListener("click", () => {
  addDialog.showModal();
});

//Event listeners to close modals
closemodalBtn.addEventListener("click", () => {
  addDialog.close();
});
//Function to validate the user input
function validateWord(name) {
  // Check if the input is empty, contains non-letter characters, or is too long/short
  if (name.trim() === "") {
    return "Input cannot be empty.";
  } else if (!/^[a-zA-Z]+$/.test(name)) {
    return "Input must contain only letters.";
  } else if (name.length > 20) {
    return "Input must be less than 20 characters.";
  } else if (name.length < 2) {
    return "Input must be at least 2 characters.";
  } else if (names.includes(name)) {
    return "Name already exists.";
  } else {
    return null;
  }
}

// Fuction to check if the array is empty and disable the select all checkbox
function updateSelectAllDisabled() {
  selectAll.disabled = names.length === 0;
}

// Function to display the greetings
function displayGreetingIfChecked(name) {
  // Check if some or all checkbox is checked
  if (name.checked) {
    output.innerHTML += `<p>Hello ${name.value}</p>`;
  }
}

// Function to remove the greetings
function removeHelloMessage(name) {
  const paragraph = output.getElementsByTagName("p"); // Get all the <p> elements
  // Loop through the <p> elements
  for (let i = 0; i < paragraph.length; i++) {
    // Check if the text content of the <p> element includes the name
    if (paragraph[i].textContent.includes(`Hello ${name}`)) {
      paragraph[i].remove(); // Remove the <p> element
      break; // Exit the loop
    }
  }
}

// Function to remove the name from the list
function removeFromTheList(name) {
  const checkboxes = document.getElementsByClassName("checkbox"); // Get all the checkboxes
  // Loop through the checkboxes
  for (let i = 0; i < checkboxes.length; i++) {
    // Check if the value of the checkbox is the same as the name
    if (checkboxes[i].value === name) {
      const label = checkboxes[i].nextElementSibling; // Get the label element
      const br = label.nextElementSibling; // Get the <br> element
      checkboxes[i].remove(); // Remove the checkbox
      label.remove(); // Remove the label
      br.remove(); // Remove the <br>
      break; // Exit the loop
    }
  }
}

// Call the function when the page loads
document.addEventListener("DOMContentLoaded", () => {
  updateSelectAllDisabled(); // Update the state of the "Select All" checkbox
});
// Javascript code for adding a name
const inputAddModal = document.getElementById("names");
const errorMassage = document.getElementById("errorMassage");
const namesList = document.getElementById("listOfNames");

// Event listener to add a name
inputAddModal.addEventListener("change", () => {
  const validationMessage = validateWord(inputAddModal.value); // Validate input
  // If input is invalid, display error message
  if (validationMessage) {
    errorMassage.textContent = validationMessage;
    errorMassage.style.color = "red";
    return;
  }

  errorMassage.textContent = ""; // Clear error message
  errorMassage.style.color = ""; // Reset text color
  names.push(inputAddModal.value); // Add the valid name to array
  inputAddModal.value = ""; // Clear the input field
  namesList.textContent = ""; // Clear the list of names
  // Loop through the names array and create a checkbox for each name
  names.forEach((name) => {
    const checkbox = document.createElement("input"); // Create a checkbox
    checkbox.type = "checkbox"; // Set the type to checkbox
    checkbox.value = name; // Set the value to the name
    checkbox.className = "checkbox"; // Add a class to the checkbox
    const label = document.createElement("label"); // Create a label
    label.textContent = name; // Set the text content to the name
    // Add an event listener to the checkbox to display the greeting
    checkbox.addEventListener("change", () => {
      // Check if the checkbox is checked
      if (checkbox.checked) {
        displayGreetingIfChecked(checkbox); // Display the greeting invoking the function
      } else {
        removeHelloMessage(checkbox.value); // Remove the greeting invoking the function
      }
      // Update the state of the "Select All" checkbox
      const checkboxes = document.querySelectorAll(".checkbox"); // Get all the checkboxes
      // Check if all the checkboxes are checked
      const allChecked = Array.from(checkboxes).every(
        (checkbox) => checkbox.checked
      );
      selectAll.checked = allChecked; // Update the state of the "Select All" checkbox
    });
    namesList.append(checkbox, label); // Append the checkbox and label to the list
    namesList.append(document.createElement("br")); // Add a <br> element
  });

  updateSelectAllDisabled(); // Update the state of the "Select All" checkbox
});

// Event listener to check all the names
const selectAll = document.querySelector("#selectAll");

selectAll.addEventListener("change", () => {
  const checkboxes = document.querySelectorAll(".checkbox"); // Get all the checkboxes that have a class name of "checkbox"
  // Loop through the checkboxes
  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked; // Check or uncheck the all checkbox
    // Check if the checkbox is checked
    if (checkbox.checked) {
      displayGreetingIfChecked(checkbox); // Display the greeting invoking the function
    } else {
      removeHelloMessage(checkbox.value); // Remove the greeting invoking the function
    }
  });
});

// Event listener to remove all the names
const removeBtn = document.getElementById("remove");
// Event listener to remove all the names
removeBtn.addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(".checkbox"); // Get all the checkboxes
  // Loop through the checkboxes
  checkboxes.forEach((checkbox) => {
    // Check if the checkbox is checked
    if (checkbox.checked) {
      // Loop through the names array
      for (let i = 0; i < names.length; i++) {
        if (names[i] === checkbox.value) {
          names.splice(i, 1); // Remove the name from the array
          break; // Exit the loop
        }
      }
      removeHelloMessage(checkbox.value); // Remove the greeting
      removeFromTheList(checkbox.value); // Remove the name from the list
    }
  });
  console.log(names);
});
