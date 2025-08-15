const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
// querySelector() returns the first element that matches the selector
const firstItem = document.querySelector(".item");
console.log(firstItem); // returns the first element with the class "item"

btn1.addEventListener("click", () => {
  firstItem.style.color = "red"; // changes the background color of the first item
});
// querySelectorAll() returns a NodeList of all elements that match the selector
const allItems = document.querySelectorAll(".item");
console.log(allItems); // returns a NodeList of all elements with the class "item"

btn2.addEventListener("click", () => {
  allItems.forEach((item) => {
    item.style.color = "green"; // changes the background color of all items
  });
});
