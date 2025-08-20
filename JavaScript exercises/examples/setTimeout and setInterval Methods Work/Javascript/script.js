const timeOutBtn = document.getElementById("setTimeoutButton");
const timeOutOutput = document.getElementById("setTimeoutOutput");
const originalButtonText = timeOutBtn.textContent;
let isTimeoutRunning = false;

timeOutBtn.addEventListener("click", () => {
  if (!isTimeoutRunning) {
    isTimeoutRunning = true;
    timeOutBtn.textContent = "Button Clicked";
    timeOutBtn.disabled = true;
    timeOutBtn.style.backgroundColor = "red";
    console.log("setTimeout: Waiting for 5 seconds...");
    setTimeout(() => {
      timeOutOutput.innerHTML = "<p>This is the new text (only runs once)</p>";
      console.log("setTimeout: Done!");
      isTimeoutRunning = false;
      timeOutBtn.textContent = originalButtonText;
      timeOutBtn.disabled = false;
      timeOutBtn.style.backgroundColor = "";
    }, 5000);
  }
});

const intervalBtn = document.getElementById("setIntervalButton");
const intervalOutput = document.getElementById("setIntervalOutput");
const originalIntervalText = intervalBtn.textContent;
let isIntervalRunning = false;
let intervalCount = 0;

intervalBtn.addEventListener("click", () => {
  if (!isIntervalRunning) {
    isIntervalRunning = true;
    intervalBtn.textContent = "Button Clicked";
    intervalBtn.disabled = true;
    intervalBtn.style.backgroundColor = "red";
    console.log("setInterval: Starting interval...");
    const intervalId = setInterval(() => {
      intervalOutput.innerHTML = `<p>This is the new text (runs every 5 seconds) - Count: ${intervalCount++}</p>`;
      console.log(`setInterval: Ran ${intervalCount} times`);
    }, 5000);
    // Stop the interval after 30 seconds
    setTimeout(() => {
      isIntervalRunning = false;
      intervalBtn.textContent = originalIntervalText;
      intervalBtn.disabled = false;
      intervalBtn.style.backgroundColor = "";
      clearInterval(intervalId);
      console.log("setInterval: Stopped!");
    }, 30000);
  }
});
