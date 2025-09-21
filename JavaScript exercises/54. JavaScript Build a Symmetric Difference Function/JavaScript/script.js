function diffArray(arr1, arr2) {
  // 1. Filter arr1: Keep elements NOT present in arr2
  const uniqueInArr1 = arr1.filter(item => !arr2.includes(item));
  
  // 2. Filter arr2: Keep elements NOT present in arr1
  const uniqueInArr2 = arr2.filter(item => !arr1.includes(item));
  
  // 3. Combine the unique elements from both filters
  return uniqueInArr1.concat(uniqueInArr2);
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))