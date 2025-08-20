document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("changeimg");
  const image = document.getElementById("image");
  const originalSrc = image.src;
  const originalAlt = image.alt;

  function changeImg() {
    if (image.src === originalSrc) {
      image.src =
        "https://cdn.freecodecamp.org/curriculum/css-photo-gallery/2.jpg";
      image.alt = "css-photo-gallery-2";
    } else {
      image.src = originalSrc;
      image.alt = originalAlt;
    }
    console.log("image changed");
  }

  btn.addEventListener("click", changeImg);
});
