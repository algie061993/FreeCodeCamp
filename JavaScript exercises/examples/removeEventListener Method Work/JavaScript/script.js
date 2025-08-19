const output = document.getElementById("out-put");
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const toggleBtn = document.getElementById("toggle");

function displayMessage() {
  output.innerHTML = "<p id=`toggle`>Hello World!</p>";
}

addBtn.addEventListener("click", displayMessage);

removeBtn.addEventListener("click", function () {
  output.innerHTML = "";
  addBtn.removeEventListener("click", displayMessage);
  addBtn.addEventListener("click", displayMessage); // add the event listener back
});

toggleBtn.addEventListener("mouseover", function () {
  toggleBtn.dataset.mouseover = "true";
  toggleBtn.textContent = "Mouse Over Detected!";
});

toggleBtn.addEventListener("mouseout", function () {
  toggleBtn.dataset.mouseover = "false";
  toggleBtn.textContent = "Mouse Over Removed!";
});
