const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const itemList = document.getElementById("itemList");
const message = document.getElementById("message");
//added by appendChild()  function
// This function adds a new item to the list
// and updates the message accordingly.

function addItem() {
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
}

addButton.addEventListener("click", addItem);

//added by removeChild()  function
// This function removes the last item from the list
// and updates the message accordingly.
function removeLastItem() {
  const lastItem = itemList.lastElementChild;

  if (itemList.children.length === 2) {
    message.textContent = `You can remove further items! Last item: ${itemList.children[1].textContent}.`;
  } else {
    itemList.removeChild(lastItem);
    message.textContent = `Removed the last item by removeChild(): ${
      lastItem.textContent.split(" - ")[1]
    }.`;
  }
}
removeButton.addEventListener("click", removeLastItem);
