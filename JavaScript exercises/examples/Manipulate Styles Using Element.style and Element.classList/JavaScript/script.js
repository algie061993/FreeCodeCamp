const paragraph = document.getElementById("style-par");
const changeBgBtn = document.getElementById("btn-change-bg");

let isRed = false;
changeBgBtn.addEventListener("click", () => {
  if (isRed) {
    paragraph.style.backgroundColor = "red";
    paragraph.style.padding = "10px";
    paragraph.style.border = "1px solid black";
    paragraph.style.borderRadius = "5px";
  } else {
    paragraph.style.backgroundColor = "unset";
    paragraph.style.padding = "";
    paragraph.style.border = "";
    paragraph.style.borderRadius = "";
  }
  isRed = !isRed;
});

const addClassBtn = document.getElementById("btn-add-class");
const paragraphClass = document.getElementById("class-par");

let isClassAdded = false;

addClassBtn.addEventListener("click", () => {
  if (isClassAdded) {
    paragraphClass.classList.remove(
      "text-color",
      "background-color",
      "border-color"
    );
  } else {
    paragraphClass.classList.add(
      "text-color",
      "background-color",
      "border-color"
    );
  }
  isClassAdded = !isClassAdded;
});

const toggleClassPara = document.getElementById("toggle-par");
const menu = document.getElementById("menu");

toggleClassPara.addEventListener("mouseover", () => {
  menu.classList.toggle("show");
});

menu.addEventListener("mouseleave", () => {
  menu.classList.toggle("show");
  toggleClassPara.classList.toggle("hide");
});
