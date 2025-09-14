const registerBtn = document.getElementById("register");
const registerModal = document.getElementById("register-modal");
const closeBtn = document.getElementById("close-modal");

registerBtn.addEventListener("click", () => {
  registerModal.classList.remove("slide-down");
  registerModal.showModal();
  registerModal.classList.add("slide-up");
});

closeBtn.addEventListener("click", () => {
  registerModal.classList.remove("slide-up");
  registerModal.classList.add("slide-down");
  setTimeout(() => {
    registerModal.close();
  }, 1000);
});
