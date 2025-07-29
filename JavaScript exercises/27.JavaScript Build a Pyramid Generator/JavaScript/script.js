function pyramid(patternChar, numRows, vertexDown) {
  if (numRows <= 0) {
    return "\n\n"; // Return just newlines for zero or negative rows
  }

  const pyramidRows = [];
  const maxWidth = 1 + 2 * (numRows - 1);

  if (!vertexDown) {
    // Upward-facing pyramid
    for (let i = 1; i <= numRows; i++) {
      const currentRowWidth = 1 + 2 * (i - 1);
      const leadingSpaces = Math.floor((maxWidth - currentRowWidth) / 2);
      const rowString =
        " ".repeat(leadingSpaces) + patternChar.repeat(currentRowWidth);
      pyramidRows.push(rowString);
    }
  } else {
    // Downward-facing pyramid
    for (let i = numRows; i >= 1; i--) {
      const currentRowWidth = 1 + 2 * (i - 1);
      const leadingSpaces = Math.floor((maxWidth - currentRowWidth) / 2);
      const rowString =
        " ".repeat(leadingSpaces) + patternChar.repeat(currentRowWidth);
      pyramidRows.push(rowString);
    }
  }

  return "\n" + pyramidRows.join("\n") + "\n";
}

const result = pyramid("*", 5, false);
console.log(result);
