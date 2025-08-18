const buttonId = document.getElementById("button-id");
const output = document.getElementById("out-put-id");

const originalText = output.innerHTML;
const originalTextButton = buttonId.textContent;
let isClicked = false;

buttonId.addEventListener("click", () => {
  if (!isClicked) {
    output.setAttribute("class", "new-class");
    output.innerHTML =
      "<p>This is a new class added to the output element.</p>";
    buttonId.textContent = "Remove Class";
    isClicked = true;
  } else {
    output.removeAttribute("class", "new-class");
    output.innerHTML = originalText;
    buttonId.textContent = originalTextButton;
    isClicked = false;
  }
});

const buttonClass = document.getElementById("button-class");
const outputClass = document.querySelector(".out-put-class");

const originalTextClass = outputClass.innerHTML;
const originalTextButtonClass = buttonClass.textContent;
let isClickedClass = false;

buttonClass.addEventListener("click", () => {
  if (!isClickedClass) {
    outputClass.setAttribute("class", "new-class");
    outputClass.innerHTML =
      "<p>This is a new updated class added to the output element.</p>";
    buttonClass.textContent = "Remove Class";
    isClickedClass = true;
  } else {
    outputClass.removeAttribute("class", "new-class");
    outputClass.innerHTML = originalTextClass;
    buttonClass.textContent = originalTextButtonClass;
    isClickedClass = false;
  }
});
