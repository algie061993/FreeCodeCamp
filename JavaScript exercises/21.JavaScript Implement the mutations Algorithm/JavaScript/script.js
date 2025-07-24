const mutation = (arr) => {
  const firstStr = arr[0].toLowerCase();
  const secondStr = arr[1].toLowerCase();
  for (const char of secondStr) {
    if (firstStr.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
};

const arr1 = ["hello", "Hello"];
const result = mutation(arr1);
console.log(`The result of the mutation of the ${arr1} is ${result}.`);

const arr2 = ["hello", "hey"];
const result2 = mutation(arr2);
console.log(`The result of the mutation of the ${arr2} is ${result2}.`);

const arr3 = ["Alien", "line"];
const result3 = mutation(arr3);
console.log(`The result of the mutation of the ${arr3} is ${result3}.`);
