function frankenSplice(arr1, arr2, index) {
  return arr2.slice(0, index).concat(arr1, arr2.slice(index));
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
