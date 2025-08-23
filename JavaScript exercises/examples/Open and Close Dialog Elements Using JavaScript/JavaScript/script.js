const dialog = document.getElementById("my-modal");
const openButton = document.getElementById("open-modal");
const closeButton = document.getElementById("close-modal");

// uncomment this line to see the dialog box show but cant interact outside the dialog box
// openButton.addEventListener("click", () => {
//   dialog.showModal();
// });

// uncomment this line to see the dialog box show and can interact outside the dialog box
// let isClicked = false;
// openButton.addEventListener("click", () => {
//   if (!isClicked) {
//     dialog.show();
//     isClicked = true;
//   } else {
//     dialog.close();
//     isClicked = false;
//   }
// });

openButton.addEventListener("click", () => {
  dialog.show();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
