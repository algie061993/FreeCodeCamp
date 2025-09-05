const noteEl = document.getElementById("note");
const statusEl = document.getElementById("status");
let currentContent = "";

noteEl.addEventListener("blur", () => {
  const newContent = noteEl.innerHTML;

  if (currentContent === newContent) {
    return;
  }
  statusEl.textContent = "Note saved successfully!";
});

window.addEventListener("DOMContentLoaded", () => {
  currentContent = noteEl.textContent;
});

noteEl.addEventListener("focus", () => {
  statusEl.textContent = "";
});

// uncomment the code below to save the note content in localStorage and to see how it works
// const noteEl = document.getElementById("note");
// const statusEl = document.getElementById("status");
// let currentContent = localStorage.getItem("noteContent") || "";

// noteEl.addEventListener("blur", () => {
//   const newContent = noteEl.innerHTML;

//   if (currentContent === newContent) {
//     return;
//   }
//   localStorage.setItem("noteContent", newContent);
//   statusEl.textContent = "Note saved successfully!";
// });

// window.addEventListener("DOMContentLoaded", () => {
//   noteEl.innerHTML = currentContent;
// });

// noteEl.addEventListener("focus", () => {
//   statusEl.textContent = "";
// });
