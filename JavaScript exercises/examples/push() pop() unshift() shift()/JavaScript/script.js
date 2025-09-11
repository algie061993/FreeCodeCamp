const wordInput = document.getElementById("word");
const addBtn = document.getElementById("add");
const closeBtn = document.getElementById("close");
const pushBtn = document.getElementById("push");
const modal = document.getElementById("pushModal");
const output = document.getElementById("output");

let arr = [];
addBtn.disabled = true;

// function updateArray(btn) {
//   if (arr.length > 0) {
//     btn.disabled = false;
//   } else {
//     btn.disabled = true;
//   }
// }

function updateArray(...buttons) {
  buttons.forEach((button) => (button.disabled = arr.length === 0));
}
function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function validateWord(word) {
  const errorMessage = [
    {
      message: "Input must contain only letters.",
      condition: !/^[a-zA-Z]+$/.test(word),
    },
    {
      message: "Input must be less than 20 characters.",
      condition: word.length > 20,
    },
    {
      message: "Input must be at least 2 characters.",
      condition: word.length < 2,
    },
    {
      message: "Input cannot be empty.",
      condition: word.trim() === "",
    },
    {
      message: "Name already exists.",
      condition: arr.includes(word),
    },
  ];

  for (let i = 0; i < errorMessage.length; i++) {
    if (errorMessage[i].condition) {
      addBtn.disabled = true;
      unshiftAddBtn.disabled = true;
      return errorMessage[i].message;
    }
  }
  if (arr.length !== 0) {
    unshiftAddBtn.disabled = false;
  } else {
    unshiftAddBtn.disabled = true;
  }
  addBtn.disabled = false;

  return null;
}

pushBtn.addEventListener("click", () => {
  modal.showModal();
});

wordInput.addEventListener("input", (e) => {
  const validationMessage = validateWord(e.target.value);
  if (validationMessage) {
    document.getElementById("error").textContent = validationMessage;
    document.getElementById("error").style.color = "red";
  } else {
    document.getElementById("error").textContent = "";
    document.getElementById("error").style.color = "";
  }
});

addBtn.addEventListener("click", () => {
  const word = wordInput.value;
  arr.push(word);
  console.log(arr);
  const span = document.createElement("span");
  span.textContent += word;
  span.classList.add("box");
  span.style.backgroundColor = randomColor();
  output.appendChild(span);
  wordInput.value = ""; // clear the input field
  addBtn.disabled = true;
  updateArray(popBtn, unshiftBtn, shiftBtn);
});

closeBtn.addEventListener("click", () => {
  modal.close();
  wordInput.value = "";
  document.getElementById("error").textContent = "";
  document.getElementById("error").style.color = "";
});

const popBtn = document.getElementById("pop");
popBtn.disabled = true;
popBtn.addEventListener("click", () => {
  arr.pop();
  console.log(arr);
  output.removeChild(output.lastElementChild);
  updateArray(popBtn, unshiftBtn, shiftBtn);
});

const unshiftInput = document.getElementById("wordUn");
const unshiftAddBtn = document.getElementById("addUn");
const unshiftCloseBtn = document.getElementById("closeUn");
const unshiftModal = document.getElementById("unshiftModal");
const unshiftBtn = document.getElementById("unshift");

unshiftBtn.disabled = true;

unshiftBtn.addEventListener("click", () => {
  unshiftModal.showModal();
});

unshiftInput.addEventListener("input", (e) => {
  const validationMessage = validateWord(e.target.value);
  if (validationMessage) {
    document.getElementById("errorUn").textContent = validationMessage;
    document.getElementById("errorUn").style.color = "red";
  } else {
    document.getElementById("errorUn").textContent = "";
    document.getElementById("errorUn").style.color = "";
  }
});

unshiftAddBtn.addEventListener("click", () => {
  const word = unshiftInput.value;
  arr.unshift(word);
  console.log(arr);
  const span = document.createElement("span");
  span.textContent += word;
  span.classList.add("box");
  span.style.backgroundColor = randomColor();
  output.prepend(span);
  unshiftInput.value = ""; // clear the input field
  unshiftAddBtn.disabled = true;
});

unshiftCloseBtn.addEventListener("click", () => {
  unshiftModal.close();
  unshiftInput.value = "";
  document.getElementById("errorUn").textContent = "";
  document.getElementById("errorUn").style.color = "";
});

const shiftBtn = document.getElementById("shift");
shiftBtn.disabled = true;
shiftBtn.addEventListener("click", () => {
  arr.shift();
  console.log(arr);
  output.removeChild(output.firstElementChild);
  updateArray(popBtn, unshiftBtn, shiftBtn);
});
