const wordInput = document.getElementById("word");
const addBtn = document.getElementById("add");
const closeBtn = document.getElementById("close");
const pushBtn = document.getElementById("push");
const modal = document.getElementById("pushModal");
const output = document.getElementById("output");

let arr = [];

function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

pushBtn.addEventListener("click", () => {
  modal.showModal();
});

wordInput.addEventListener("change", () => {
  addBtn.addEventListener("click", () => {
    arr.push(word.value);
    const span = document.createElement("span");
    span.textContent = word.value;
    span.classList.add("box");
    span.style.backgroundColor = randomColor();
    output.appendChild(span);
  });
});

closeBtn.addEventListener("click", () => {
  modal.close();
});
