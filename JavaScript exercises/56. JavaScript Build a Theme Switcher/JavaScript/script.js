let themes = [
  {
    name: "light",
    message: "Light theme",
  },
  {
    name: "dark",
    message: "Dark theme",
  },
];

const themeBtn = document.getElementById("theme-switcher-button");
const themeMenuDropdown = document.getElementById("theme-dropdown");
const liveRegion = document.querySelector('[aria-live="polite"]');
const body = document.body;

// Function to toggle the dropdown's visibility and accessibility attributes
const toggleDropdown = () => {
  const isExpanded = themeBtn.getAttribute("aria-expanded") === "true";

  if (isExpanded) {
    // If the dropdown is open, close it
    themeMenuDropdown.setAttribute("hidden", "");
    themeBtn.setAttribute("aria-expanded", "false");
  } else {
    // If the dropdown is closed, open it
    themeMenuDropdown.removeAttribute("hidden");
    themeBtn.setAttribute("aria-expanded", "true");
  }
};

// Function to apply the selected theme
const applyTheme = (theme) => {
  // Remove all theme classes first to prevent multiple themes
  themes.forEach((t) => {
    body.classList.remove(`theme-${t.name}`);
  });

  // Add the selected theme class to the body
  body.classList.add(`theme-${theme.name}`);

  // Update the live region for screen readers
  liveRegion.textContent = theme.message;
};

// Event listener for the theme switcher button
themeBtn.addEventListener("click", () => {
  toggleDropdown();
});

// Event listeners for the menu items
themeMenuDropdown.querySelectorAll("li").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    // Get the theme name from the li's ID attribute (e.g., "theme-light" -> "light")
    const themeName = e.currentTarget.id.replace("theme-", "");

    // Find the corresponding theme object from the themes array
    const selectedTheme = themes.find((theme) => theme.name === themeName);

    if (selectedTheme) {
      applyTheme(selectedTheme);
      toggleDropdown(); // Close the dropdown after selecting a theme
    }
  });
});
