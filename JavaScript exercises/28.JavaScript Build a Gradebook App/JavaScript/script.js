function getAverage(scores) {
  const sum = scores.reduce((a, b) => a + b, 0);
  return sum / scores.length;
}

function getGrade(score) {
  if (score === 100) return "A+";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

function hasPassingGrade(score) {
  const grade = getGrade(score);
  return grade !== "F";
}

function studentMsg(scores, studentScore) {
  const average = getAverage(scores);
  const grade = getGrade(studentScore);
  const passed = hasPassingGrade(studentScore);
  const message = `Class average: ${average}. Your grade: ${grade}. ${
    passed ? "You passed the course." : "You failed the course."
  }`;
  return message;
}

let result = studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37);

console.log(result);
