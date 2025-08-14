// Get all button elements with class favorite-icon
const favoriteButtons = document.querySelectorAll(".favorite-icon");

// Add event listener to each button
favoriteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Toggle filled class
    button.classList.toggle("filled");

    // Toggle heart symbol
    if (button.classList.contains("filled")) {
      button.innerHTML = "&#10084;";
    } else {
      button.innerHTML = "&#9825;";
    }
  });
});
