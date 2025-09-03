let count = 0;

const cc = (card) => {
  const highCards = [10, "J", "Q", "K", "A"];
  const lowCards = [2, 3, 4, 5, 6];

  if (highCards.includes(card)) {
    count--;
  } else if (lowCards.includes(card)) {
    count++;
  }

  const action = count > 0 ? "Bet" : "Hold";
  return `${count} ${action}`;
};

console.log(cc(2));
console.log(cc(3));
