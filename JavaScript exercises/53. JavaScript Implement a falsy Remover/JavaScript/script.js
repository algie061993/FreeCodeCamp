function bouncer(arr) {
  let word = []
  for (let i = 0; i < arr.length; i++)
    if (typeof arr[i] !== Boolean && arr[i]) {
      word.push(arr[i])
    }
  return word;
}
console.log(bouncer([7, "ate", "", false, 9]))