const num = 5;

const factorialCalculator = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

const factorial = factorialCalculator(num);
const resultMsg = `Factorial of ${num} is ${result}`;
console.log(resultMsg);
