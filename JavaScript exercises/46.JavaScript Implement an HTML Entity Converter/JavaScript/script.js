const input = document.getElementById("input");
const button = document.getElementById("convert-button");
const output = document.getElementById("output");

function convertHTML(str) {
  const convertedStr = str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
  return convertedStr;
}

button.addEventListener("click", function () {
  output.innerText = convertHTML(input.value);
});
