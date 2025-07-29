function sumAll(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

result = sumAll([1, 4]);
console.log(result);

// optimized
function sumAll(arr) {
  const [a, b] = arr.sort((a, b) => a - b);
  let sum = 0;
  for (let i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
}

result = sumAll([1, 4]);
console.log(result);
