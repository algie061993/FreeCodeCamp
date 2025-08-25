const textArea = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

textArea.addEventListener("input", () => {
  const charLength = textArea.value.length;
  if (charLength >= 50) {
    charCount.setAttribute("class", "textRed");
    textArea.value = textArea.value.substring(0, 50);
  } else {
    charCount.removeAttribute("class", "textRed");
  }
  charCount.innerText = `Character Count: ${charLength}/50`;
});
