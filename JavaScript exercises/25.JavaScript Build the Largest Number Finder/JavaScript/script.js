function largestOfAll(arrays) {
  let result = [];
  for (let i = 0; i < arrays.length; i++) {
    let max = arrays[i][0];
    for (let j = 1; j < arrays[i].length; j++) {
      if (arrays[i][j] > max) {
        max = arrays[i][j];
      }
    }
    result.push(max);
  }
  return result;
}

console.log(
  largestOfAll([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
