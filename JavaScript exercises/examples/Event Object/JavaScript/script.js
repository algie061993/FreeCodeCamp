const eventButton = document.getElementById("event-button");
const eventOutput = document.getElementById("event-output");
let isClickedEventButton = false;

eventButton.addEventListener("click", function (event) {
  console.log(event);
  eventOutput.innerHTML += `<p>Event type: ${event}</p>`;
  if (!isClickedEventButton) {
    eventButton.disabled = true;
    eventButton.textContent = "Button Clicked";
    isClickedEventButton = true;
  }
});

const eventTypeButton = document.getElementById("event-type-button");
const eventTypeOutput = document.getElementById("event-type-output");
let isClickedEventTypeButton = false;
eventTypeButton.addEventListener("click", function (event) {
  console.log(event);
  eventTypeOutput.innerHTML += `<p>Event type: ${event.type}</p>`;
  if (!isClickedEventTypeButton) {
    eventTypeButton.disabled = true;
    eventTypeButton.textContent = "Button Clicked";
    isClickedEventTypeButton = true;
  }
});

const eventTargetButton = document.getElementById("event-target-button");
const eventTargetOutput = document.getElementById("event-target-output");
let isClickedEventTargetButton = false;

eventTargetButton.addEventListener("click", function (event) {
  console.log("ssss", event.target);
  eventTargetOutput.innerHTML += `<p>Event target: ${event.target.innerHTML}</p>`;
  if (!isClickedEventTargetButton) {
    eventTargetButton.disabled = true;
    eventTargetButton.textContent = "Button Clicked";
    isClickedEventTargetButton = true;
  }
});

const eventKeyInput = document.getElementById("event-key-input");
const eventKeyOutput = document.getElementById("event-key-output");

let keyStrokes = "";
let keyStrokeLimit = 10;

eventKeyInput.addEventListener("keydown", function (event) {
  if (keyStrokes.length >= keyStrokeLimit) {
    eventKeyInput.disabled = true;
    eventKeyOutput.innerHTML += `<p>Character limit reached: ${keyStrokeLimit}</p>`;
  } else if (event.key === "Backspace") {
    keyStrokes = keyStrokes.slice(0, -1);
    eventKeyOutput.innerHTML = `<p>Key pressed: ${keyStrokes}</p>`;
    keyStrokeLimit - 1;
  } else {
    keyStrokes += event.key;
    eventKeyOutput.innerHTML = `<p>Key pressed: ${keyStrokes}</p>`;
  }
});
