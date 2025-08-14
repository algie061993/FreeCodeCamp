const container = document.querySelector(".container");

// Event listener on the container (parent)
container.addEventListener("click", (event) => {
  console.log("Container listener:");
  console.log(event.target);
  if (event.target.classList.contains("button")) {
    event.target.style.backgroundColor = "red";
  }
});

// Event listener on one of the buttons (child)
const button = document.querySelector(".button");
button.addEventListener("click", (event) => {
  console.log("Button listener:");
  console.log(event.target);
  event.stopPropagation(); // prevent event from bubbling up to container
});
