let botName = "MathBot";
let greeting = `Hi there! My name is ${botName} and I am here to teach you about the Math object!`;
let randomNum = Math.random();
let min = 1;
let max = 100;
let randomNum2 = Math.random() * (max - min) + min;
let numRoundedDown = Math.floor(6.7);
let numRoundedUp = Math.ceil(3.2);
let numRounded = Math.round(2.7);
let numRounded2 = Math.round(11.2);
let maxNum = Math.max(3, 125, 55, 24);
let minNum = Math.min(6, 90, 14, 90, 2);
console.log(greeting);
// Math.random()
console.log(
  "The Math.random() method returns a pseudo random number between 0 and less than 1."
);
console.log(randomNum);
// Math.random() with max and min
console.log("Now, generate a random number between two values.");
console.log("The Math.random() with max of 100 and min of 1.");
console.log(randomNum2);
// Math.floor() rounded down
console.log(
  "The Math.floor() method rounds the value down to the nearest whole integer."
);
console.log("The Math.floor(6.7)");
console.log(numRoundedDown);
// Math.ceil() rounded up
console.log(
  "The Math.ceil() method rounds the value up to the nearest whole integer."
);
console.log("The Math.ceil(3.2)");
console.log(numRoundedUp);
// Math.round() rounded to the nearest whole integer
console.log(
  "The Math.round() method rounds the value to the nearest whole integer."
);
console.log("The Math.round(2.7)");
console.log(numRounded);
console.log("The Math.round(11.2)");
console.log(numRounded2);
// Math.max() and Math.min() to find the largest and smallest number
console.log(
  "The Math.max() and Math.min() methods are used to get the maximum and minimum number from a range."
);
console.log("The maximum number in this range (3, 125, 55, 24) ");
console.log(maxNum);
console.log("The minimum number in this range (6, 90, 14, 90, 2) ");
console.log(minNum);
//End of the workshop
console.log("It was fun learning about the different Math methods with you!");
