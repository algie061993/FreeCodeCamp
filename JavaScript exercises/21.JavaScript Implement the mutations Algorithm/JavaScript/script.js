const mutation = (arr) => {
  const firstStr = arr[0].toLowerCase();
  const secondStr = arr[1].toLowerCase();
  for (let i = 0; i < secondStr.length; i++) {
    if (firstStr.indexOf(secondStr[i]) === -1) {
      return false;
    }
  }
  return true;
};
console.log(mutation(["hello", "Hello"]));
