const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const itemList = document.getElementById("itemList");
const message = document.getElementById("message");

addButton.addEventListener("click", function () {
  let addedItemLimit = 5;
  if (itemList.children.length >= addedItemLimit) {
    message.textContent = "Cannot add more than " + addedItemLimit + " items!";
    return;
  }
  const newItem = document.createElement("li");
  newItem.textContent =
    "Added by appendChild() - Item " + (itemList.children.length + 1);
  itemList.appendChild(newItem);
  message.textContent = `Added item: ${newItem.textContent}. You can remove items now!`;
});

removeButton.addEventListener("click", function () {
  const lastItem = itemList.lastElementChild;
  if (lastItem) {
    if (itemList.children.length === 2) {
      message.textContent = `You can remove further items!`;
    } else {
      itemList.removeChild(lastItem);
      message.textContent = `Removed the last item by removeChild(): ${
        lastItem.textContent.split(" - ")[1]
      }.`;
    }
  } else {
    message.textContent = "No items to remove!";
  }
});
