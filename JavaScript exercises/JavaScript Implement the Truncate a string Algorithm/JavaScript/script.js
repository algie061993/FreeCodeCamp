// Truncate a string if the length of the string is greater than the strLimitNum it will return the string with "..." at the end
const truncateString = (string, strLimitNum) => {
  if (string.length > strLimitNum) {
    return string.slice(0, strLimitNum) + "...";
  } else {
    return string;
  }
};

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
