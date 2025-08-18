const userAgent = navigator.userAgent;
const userAgentOutput = document.getElementById("userAgentOutput");
const userAgentButton = document.getElementById("userAgentButton");
const language = navigator.language;
const languageOutput = document.getElementById("languageOutput");
const languageButton = document.getElementById("languageButton");
const innerWidth = window.innerWidth;
const innerWidthOutput = document.getElementById("innerWidthOutput");
const innerWidthButton = document.getElementById("innerWidthButton");
const currentLocation = window.location.href;
const locationOutput = document.getElementById("locationOutput");
const locationButton = document.getElementById("locationButton");
const children = document.body.children;
const childrenOutput = document.getElementById("childrenOutput");
const childrenButton = document.getElementById("childrenButton");
const itemList = document.getElementById("itemList");

userAgentButton.addEventListener("click", () => {
  userAgentOutput.textContent = userAgent;
});

languageButton.addEventListener("click", () => {
  languageOutput.textContent = language;
});
innerWidthButton.addEventListener("click", () => {
  innerWidthOutput.textContent = innerWidth;
});
locationButton.addEventListener("click", () => {
  locationOutput.textContent = location;
});
childrenButton.addEventListener("click", () => {
  childrenOutput.textContent = children.length;
});
