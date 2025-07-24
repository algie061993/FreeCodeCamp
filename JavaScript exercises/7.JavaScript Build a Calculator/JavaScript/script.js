// Functions Sum
const calculateSum = (num1, num2) => {
  return num1 + num2;
};
console.log(
  "This is the sum of the two numbers (2, 5) , (10, 10) and (5, 5) using a arrow function."
);
console.log(calculateSum(2, 5));
console.log(calculateSum(10, 10));
console.log(calculateSum(5, 5));

// Functions Difference
const calculateDifference = (num1, num2) => {
  return num1 - num2;
};
console.log(
  "This is the difference of the two numbers (22, 5), (12, 1) and (17, 9) using a arrow function."
);
console.log(calculateDifference(22, 5));
console.log(calculateDifference(12, 1));
console.log(calculateDifference(17, 9));

//Function product
const calculateProduct = (num1, num2) => {
  return num1 * num2;
};
console.log(
  "This is the product of the two numbers (13, 5) using a arrow function."
);
console.log(calculateProduct(13, 5));

//Function quotient
const calculateQuotient = (num1, num2) => {
  if (num2 === 0) {
    return "Error: Division by zero.";
  } else {
    return num1 / num2;
  }
};
console.log(
  "This is the quotient of the two numbers (7, 11) using a arrow function."
);
console.log(calculateQuotient(7, 11));
console.log(calculateQuotient(3, 0));

//Function square
const calculateSquare = (num) => {
  return Math.pow(num, 2);
};
console.log(
  "This is the square of the number (2) and (9) using a arrow function."
);
console.log(calculateSquare(2));
console.log(calculateSquare(9));

//Function square root
const calculateSquareRoot = (num) => {
  return Math.sqrt(num);
};
console.log(
  "This is the square root of the number (25) and (100) using a arrow function."
);
console.log(calculateSquareRoot(25));
console.log(calculateSquareRoot(100));
