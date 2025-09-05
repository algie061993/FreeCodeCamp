function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  console.log("original arr is", arr);
  arr.push(num);
  arr.sort((a, b) => a - b);

  console.log("arry is", arr);
  console.log("num is", num);
  console.log("the index of num", arr.indexOf(num));

  return arr.findIndex((e) => e === num);
}
console.log(getIndexToIns([40, 60], 50)); // should return 1.
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
