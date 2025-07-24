const questions = [
  {
    category: "Math",
    question: "What is 2 + 2?",
    choices: ["4", "6", "7"],
    answer: "4",
  },
  {
    category: "Geography",
    question: "What is the capital of England?",
    choices: ["London", "Liverpool", "Birmingham"],
    answer: "London",
  },
  {
    category: "History",
    question: "Who was the first president of the United States?",
    choices: ["George Washington", "John Adams", "Thomas Jefferson"],
    answer: "George Washington",
  },
  {
    category: "Science",
    question: "What is the chemical symbol for water?",
    choices: ["H2O", "CO2", "O2"],
    answer: "H2O",
  },
  {
    category: "Entertainment",
    question: "Who played the character of Harry Potter?",
    choices: ["Johnny Depp", "Leonardo DiCaprio", "Daniel Radcliffe"],
    answer: "Daniel Radcliffe",
  },
];

const getRandomQuestion = (questions) => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
};

const getRandomComputerChoice = (choices) => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const getResults = (question, computerChoice) => {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
};

const question = getRandomQuestion(questions);
console.log(question.question);
const computerChoice = getRandomComputerChoice(question.choices);
console.log(computerChoice);
const result = getResults(question, computerChoice);
console.log(result);
