const timeOutBtn = document.getElementById("setTimeoutButton");
const timeOutOutput = document.getElementById("setTimeoutOutput");
let originalText = timeOutBtn.textContent;
let istimeoutDisable = false;

timeOutBtn.addEventListener("click", () => {
  if (!istimeoutDisable) {
    istimeoutDisable = true;
    timeOutBtn.textContent = "Button Clicked";
    timeOutBtn.disabled = true;
    timeOutBtn.style.backgroundColor = "red";
    console.log("setTimeout: Waiting for 5 seconds...");
    setTimeout(() => {
      timeOutOutput.innerHTML = "<p>This is the new text (only runs once)</p>";
      console.log("setTimeout: Done!");
      istimeoutDisable = false;
      timeOutBtn.textContent = originalText;
      timeOutBtn.disabled = false;
      timeOutBtn.style.backgroundColor = "";
    }, 5000);
  }
});

const intervalBtn = document.getElementById("setIntervalButton");
const intervalOutput = document.getElementById("setIntervalOutput");
let intervalCount = 0;
let originalTextInterval = timeOutBtn.textContent;
let isIntervalDisable = false;

intervalBtn.addEventListener("click", () => {
  if (!isIntervalDisable) {
    console.log("setInterval: Starting interval...");
    const intervalId = setInterval(() => {
      isIntervalDisable = true;
      intervalBtn.textContent = "Button Clicked";
      intervalBtn.disabled = true;
      intervalBtn.style.backgroundColor = "red";
      intervalOutput.innerHTML = `<p>This is the new text (runs every 5 seconds) - Count: ${intervalCount++}</p>`;
      console.log(`setInterval: Ran ${intervalCount} times`);
    }, 5000);
    // Stop the interval after 30 seconds
    setTimeout(() => {
      isIntervalDisable = false;
      intervalBtn.textContent = originalTextInterval;
      intervalBtn.disabled = false;
      intervalBtn.style.backgroundColor = "";
      clearInterval(intervalId);
      console.log("setInterval: Stopped!");
    }, 30000);
  }
});
