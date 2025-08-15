// Using innerHTML
const innerHTMLExample = document.getElementById("innerHTML-example");
const innerHTMLbtn = document.getElementById("innerHTML-button");

innerHTMLbtn.addEventListener("click", () => {
  innerHTMLExample.innerHTML =
    "<p>This is a new paragraph added using innerHTML.</p>";
  console.log("innerHTML updated");
  console.log(innerHTMLExample.innerHTML);
});

// Using createElement()
const createElementBtn = document.getElementById("createElement-button");
const createElementExample = document.getElementById("createElement-example");
const newButton = document.createElement("button");

function newCreatedButtonFunction() {
  console.log("New button created using createElement");
  alert("HAHAHAHA Gotcha!");
}

createElementBtn.addEventListener("click", () => {
  newButton.textContent = "Click me!";
  newButton.addEventListener("click", newCreatedButtonFunction);
  createElementExample.appendChild(newButton);
  console.log("New button added using createElement");
});
// newButton.textContent = "Click me!";
// createElementExample.appendChild(newButton);
