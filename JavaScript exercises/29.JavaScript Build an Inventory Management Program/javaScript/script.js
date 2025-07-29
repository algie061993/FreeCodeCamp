const inventory = [];

function findProductIndex(name) {
  return inventory.findIndex((product) => product.name === name.toLowerCase());
}

function addProduct(product) {
  const index = findProductIndex(product.name);
  if (index !== -1) {
    inventory[index].quantity += product.quantity;
    console.log(`${product.name.toLowerCase()} quantity updated`);
  } else {
    inventory.push({
      name: product.name.toLowerCase(),
      quantity: product.quantity,
    });
    console.log(`${product.name.toLowerCase()} added to inventory`);
  }
}

function removeProduct(name, quantity) {
  const index = findProductIndex(name.toLowerCase());
  if (index !== -1) {
    if (inventory[index].quantity >= quantity) {
      inventory[index].quantity -= quantity;
      console.log(
        `Remaining ${name.toLowerCase()} pieces: ${inventory[index].quantity}`
      );
      if (inventory[index].quantity === 0) {
        inventory.splice(index, 1);
      }
    } else {
      console.log(
        `Not enough ${name.toLowerCase()} available, remaining pieces: ${
          inventory[index].quantity
        }`
      );
    }
  } else {
    console.log(`${name.toLowerCase()} not found`);
  }
}

addProduct({ name: "apple", quantity: 10 });
addProduct({ name: "banana", quantity: 5 });
addProduct({ name: "apple", quantity: 5 });
console.log(inventory);
removeProduct("apple", 3);
removeProduct("banana", 2);
removeProduct("orange", 1);

console.log(inventory);
