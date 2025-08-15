// const innerTextExample = document.getElementById("innerTextexample");
// const innerTextBtn = document.getElementById("innerTextButton");
// const innerTextResult = document.getElementById("innerTextResult");

// function handleInnerTextClick() {
//   if (innerTextExample !== innerTextResult) {
//     innerTextResult.innerText = innerTextExample.innerText;
//     innerTextExample.innerHTML =
//       "<p>This is a new paragraph added using innerHTML.</p>";
//     console.log("innerText updated");
//     console.log(innerTextResult.innerText);
//     innerTextBtn.removeEventListener("click", handleInnerTextClick);
//   }
// }

// innerTextBtn.addEventListener("click", handleInnerTextClick);

// innerText Example
const innerTextExample = document.getElementById("innerTextExample");
const innerTextBtn = document.getElementById("innerTextButton");
const innerTextResult = document.getElementById("innerTextResult");

innerTextBtn.addEventListener("click", function () {
  innerTextResult.textContent = `innerText: "${innerTextExample.innerText}"`;
});

// textContent Example
const textContentExample = document.getElementById("textContentExample");
const textContentBtn = document.getElementById("textContentButton");
const textContentResult = document.getElementById("textContentResult");

textContentBtn.addEventListener("click", function () {
  textContentResult.textContent = `textContent: "${textContentExample.textContent}"`;
});

// innerHTML Example
const innerHTMLExample = document.getElementById("innerHTMLExample");
const innerHTMLBtn = document.getElementById("innerHTMLButton");
const innerHTMLResult = document.getElementById("innerHTMLResult");

innerHTMLBtn.addEventListener("click", function () {
  innerHTMLResult.textContent = `innerHTML: "${innerHTMLExample.innerHTML}"`;
});
