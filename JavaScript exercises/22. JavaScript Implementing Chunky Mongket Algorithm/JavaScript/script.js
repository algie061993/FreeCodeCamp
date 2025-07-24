const chunkArrayInGroups = (arr, size) => {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 2));
