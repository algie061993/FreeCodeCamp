function booWho(bool) {
  return typeof bool === "boolean";
}

console.log(booWho(null));
console.log(booWho(true));
console.log(booWho(false));
console.log(booWho(1));
console.log(booWho(NaN));
console.log(booWho("a"));
console.log(booWho("true"));
console.log(booWho("false"));
