function addTogether(a, b) {
  if (typeof a !== "number") {
    return undefined;
  }
  if (b === undefined) {
    if (arguments.length === 1) {
      return function (c) {
        if (typeof c !== "number") {
          return undefined;
        }
        return a + c;
      };
    } else {
      return undefined;
    }
  }
  if (typeof b !== "number") {
    return undefined;
  }
  return a + b;
}

console.log(addTogether(5, undefined)); // undefined
console.log(addTogether(2, 3)); // 5
console.log(addTogether("http://bit.ly/IqT6zt")); // undefined
console.log(addTogether(2, "3")); // undefined
console.log(addTogether(2)([3])); // undefined
console.log(addTogether(3)); // 5
console.log(addTogether(3)(4)); // 7
