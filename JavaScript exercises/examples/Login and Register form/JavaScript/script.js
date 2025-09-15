// JavaScript login and register form example
const registerBtn = document.getElementById("register");
const registerModal = document.getElementById("register-modal");
const closeBtn = document.getElementById("close-modal");

// Event listener for the register button
registerBtn.addEventListener("click", () => {
  registerModal.classList.remove("slide-down"); // remove the slide-down class
  registerModal.showModal(); // show the modal
  registerModal.classList.add("slide-up"); // add the slide-up class
});

// Event listener for the close button
closeBtn.addEventListener("click", () => {
  registerModal.classList.remove("slide-up"); // remove the slide-up class
  registerModal.classList.add("slide-down"); // add the slide-down class
  // delay the closing of the modal by 1 second
  setTimeout(() => {
    registerModal.close(); // close the modal
  }, 1000);
});

const emailInputRegister = document.getElementById("emailRegister");
const passwordInputRegister = document.getElementById("passwordRegister");
const registeredBtn = document.getElementById("registered");
const errorRegister = document.getElementById("errorRegister");
const accountCreated = []; // Array to store registered users

// Function to validate email and password
function registerValidation(email, password) {
  email = email.trim(); // remove leading and trailing spaces
  password = password.trim(); // remove leading and trailing spaces

  // Validate email and password if its not empty
  if (!email || !password) {
    errorRegister.textContent = "Please fill in all fields";
    errorRegister.style.color = "red";
    registeredBtn.disabled = true;
    return false;
  }

  // Validate email format using regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email format is valid
  if (!emailRegex.test(email)) {
    errorRegister.textContent = "Invalid email format";
    errorRegister.style.color = "red";
    registeredBtn.disabled = true;
    return false;
  }

  // Validate password format using regular expression
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;

  // Check if the password meets the requirements
  if (!passwordRegex.test(password)) {
    errorRegister.textContent =
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.";
    errorRegister.style.color = "red";
    registeredBtn.disabled = true;
    return false;
  }

  // Check if the email already exists
  const accountCreated =
    JSON.parse(localStorage.getItem("accountCreated")) || [];
  // Loop through the accountCreated array
  for (const user of accountCreated) {
    // Check if the email already exists
    if (user.email === email) {
      errorRegister.textContent = "Email already exists";
      errorRegister.style.color = "red";
      registeredBtn.disabled = true;
      return false;
    }
  }
  // If all validations pass
  errorRegister.textContent = "";
  errorRegister.style.color = "";
  registeredBtn.disabled = false;
  return true;
}

// Event listeners for input fields email
emailInputRegister.addEventListener("input", () => {
  const email = emailInputRegister.value; // Get the email value
  const password = passwordInputRegister.value; // Get the password value
  registerValidation(email, password); // Invoke the validation function and pass the email and password
});

// Event listeners for input fields password
passwordInputRegister.addEventListener("input", () => {
  const email = emailInputRegister.value; // Get the email value
  const password = passwordInputRegister.value; // Get the password value
  registerValidation(email, password); // Invoke the validation function and pass the email and password
});

// Event listener for the registered button
registeredBtn.addEventListener("click", () => {
  // Get the email and password values
  try {
    const email = emailInputRegister.value; // Get the email value
    const password = passwordInputRegister.value; // Get the password value
    // Call the validation function and pass the email and password
    if (!registerValidation(email, password)) {
      return;
    }

    errorRegister.textContent = ""; // Clear the error message
    accountCreated.push({ email, password }); // Push the email and password to the accountCreated array
    localStorage.setItem("accountCreated", JSON.stringify(accountCreated)); // Save the accountCreated array to local storage
    emailInputRegister.value = ""; // Clear the input fields
    passwordInputRegister.value = ""; // Clear the input fields
    errorRegister.textContent = "Successfully registered!"; // Set the success message
    errorRegister.style.color = "green"; // Set the success message color
    // Delay the success message by 3 seconds
    setTimeout(() => {
      errorRegister.textContent = "";
      errorRegister.style.color = "";
    }, 3000);
  } catch (error) {
    // Log the error
    console.error(error);
    errorRegister.textContent = "An error occurred during registration."; // Set the error message
    errorRegister.style.color = "red";
    // Delay the error message by 3 seconds
    setTimeout(() => {
      errorRegister.textContent = "";
      errorRegister.style.color = "";
    }, 3000);
  }
});

const emailInputLogin = document.getElementById("emailLogin");
const passwordInputLogin = document.getElementById("passwordLogin");
const loginBtn = document.getElementById("submit");
const errorLogin = document.getElementById("errorLogin");

// Function to validate email and password
function loginValidation(email, password) {
  email = email.trim(); // remove leading and trailing spaces
  password = password.trim(); // remove leading and trailing spaces

  // Validate email and password is not empty
  if (!email || !password) {
    errorLogin.textContent = "Please fill in all fields";
    errorLogin.style.color = "red";
    loginBtn.disabled = true;
    return false;
  }

  // Validate email and password if valid
  errorLogin.textContent = "";
  errorLogin.style.color = "";
  loginBtn.disabled = false;
  return true;
}

// Function to fetch the home page
function fetchHomePage() {
  // Fetch the home page
  fetch("./page/home.html")
    .then((response) => response.text())
    .then((data) => {
      document.body.innerHTML = data;

      const email = localStorage.getItem("email"); // Get the email from local storage
      const emailElement = document.getElementById("email"); // Get the email element
      emailElement.textContent = email; // Set the email in the email element

      // Add event listener to the logout button
      const logoutBtn = document.getElementById("logout");

      logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("email"); // Remove the email from local storage
        location.reload(); // Reload the page
      });
    })
    .catch((error) => {
      // Log the error
      console.error("Error fetching home page:", error);
    });
}

// Event listener for the login button
loginBtn.addEventListener("click", () => {
  try {
    const email = emailInputLogin.value; // Get the email value
    const password = passwordInputLogin.value; // Get the password value

    const accountCreated =
      JSON.parse(localStorage.getItem("accountCreated")) || []; // Get the accountCreated array

    // Loop through the accountCreated array
    for (const user of accountCreated) {
      // Check if the email and password match
      if (user.email === email && user.password === password) {
        errorLogin.textContent = "Successfully logged in!";
        errorLogin.style.color = "green";
        localStorage.setItem("email", email); // Save the email to local storage
        fetchHomePage(); // Fetch the home page
        emailInputLogin.value = "";
        passwordInputLogin.value = "";
        // Delay the success message by 3 seconds
        setTimeout(() => {
          errorLogin.textContent = "";
          errorLogin.style.color = "";
        }, 3000);
        return;
      } else {
        // Display error message
        errorLogin.textContent = "Invalid email or password";
        errorLogin.style.color = "red";
        // Delay the error message by 3 seconds
        setTimeout(() => {
          errorLogin.textContent = "";
          errorLogin.style.color = "";
        }, 3000);
      }
    }
  } catch (error) {
    // Log the error
    console.error(error);
    errorLogin.textContent = "An error occurred during login."; // Set the error message
    errorLogin.style.color = "red";
    // Delay the error message by 3 seconds
    setTimeout(() => {
      errorLogin.textContent = "";
      errorLogin.style.color = "";
    }, 3000);
  }
});

// Event listeners for input fields
emailInputLogin.addEventListener("input", () => {
  const email = emailInputLogin.value;
  const password = passwordInputLogin.value;
  loginValidation(email, password); // Invoke the validation function and pass the email and password
});

// Event listeners for input fields
passwordInputLogin.addEventListener("input", () => {
  const email = emailInputLogin.value;
  const password = passwordInputLogin.value;
  loginValidation(email, password); // Invoke the validation function and pass the email and password
});
