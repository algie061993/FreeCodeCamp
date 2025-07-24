const repeatStringNumTimes = (str, num) => {
  let result = "";
  for (let i = 0; i < num; i++) {
    if (i === 0) {
      result += str;
    } else {
      result += str;
    }
  }
  return result;
};

console.log(repeatStringNumTimes("abc", 3));
