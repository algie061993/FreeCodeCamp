const lunches = [];

const addLunchToEnd = (menu, lunch) => {
  menu.push(lunch);
  console.log(`${lunch} added to the end of the lunch menu.`);
  return menu;
};

const addLunchToStart = (menu, lunch) => {
  menu.unshift(lunch);
  console.log(`${lunch} added to the start of the lunch menu.`);
  return menu;
};

const removeLastLunch = (menu) => {
  if (menu.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = menu.pop();
    console.log(`${removed} removed from the end of the lunch menu.`);
  }
  return menu;
};

const removeFirstLunch = (menu) => {
  if (menu.length === 0) {
    console.log("No lunches to remove.");
  } else {
    const removed = menu.shift();
    console.log(`${removed} removed from the start of the lunch menu.`);
  }
  return menu;
};

const getRandomLunch = (menu) => {
  if (menu.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * menu.length);
    console.log(`Randomly selected lunch: ${menu[randomIndex]}`);
  }
};

const showLunchMenu = (menu) => {
  if (menu.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${menu.join(", ")}`);
  }
};

// Example usage:
addLunchToEnd(lunches, "Pizza");
addLunchToEnd(lunches, "Burger");
addLunchToStart(lunches, "Salad");
addLunchToStart(lunches, "Sandwich");
removeLastLunch(lunches);
removeFirstLunch(lunches);
getRandomLunch(lunches);
showLunchMenu(lunches);
