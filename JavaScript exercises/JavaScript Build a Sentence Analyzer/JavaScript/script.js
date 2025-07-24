// for loops includes library
const getVowelCount = (sentence) => {
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    if ("aeiouAEIOU".includes(sentence[i])) {
      count++;
      //uncomment this if you man to see the vowels
      //console.log(sentence[i]);
    }
  }
  return count;
};

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log("Vowel Count: " + vowelCount);

// for of loop includes library
const getConsonantCount = (sentence) => {
  let count = 0;
  for (let consonant of sentence) {
    if ("bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ".includes(consonant)) {
      count++;
      //uncomment this if you man to see the consonants
      //console.log(consonant);
    }
  }

  return count;
};

const consonantCount = getConsonantCount("Coding is fun!");
console.log("Consonant Count: " + consonantCount);

// for in loop includes library
const getPunctuationCount = (sentence) => {
  let count = 0;
  for (let char in sentence) {
    if ("',.?!;:".includes(char)) {
      count++;
      //uncomment this if you man to see the punctuation
      // console.log(char);
    }
  }
  return count;
};

const punctuationCount = getPunctuationCount("WHAT?!?!?!?!?");
console.log("Punctuation Count: " + punctuationCount);

// for of loop with split library
const getWordCount = (sentence) => {
  let count = 0;
  for (let word of sentence.split(" ")) {
    if (word !== "") {
      count++;
      //uncomment this if you man to see the words
      //console.log(word);
    }
  }
  return count;
};

const wordCount = getWordCount("When are you gonna start learning to code?");
console.log("Word Count: " + wordCount);

// Label loops "innerLoop " "outerLoop" and show how continue and break work
function processBooks(books) {
  outerLoop: for (let i = 0; i < books.length; i++) {
    console.log(
      `Processing book ${i + 1}: ${books[i].title} by ${books[i].author}`
    );
    innerLoop: for (let j = 0; j < books[i].quantity; j++) {
      console.log(`  Copy ${j + 1} of ${books[i].title} is available`);
      if (books[i].quantity === 0) {
        console.log(`  Sorry, ${books[i].title} is out of stock`);
        break innerLoop; // break out of the inner loop if the book is out of stock
      }
      if (books[i].author === "Author 3") {
        console.log(
          `  Skipping ${books[i].title} by ${books[i].author} due to low quantity`
        );
        continue outerLoop; // skip to the next book if the author is "Author 3"
      }
    }
    console.log(
      `Finished processing book ${i + 1}: ${books[i].title} by ${
        books[i].author
      }`
    );
  }
}

// Example usage:
const books = [
  { title: "Book 1", author: "Author 1", quantity: 5 },
  { title: "Book 2", author: "Author 2", quantity: 3 },
  { title: "Book 3", author: "Author 3", quantity: 2 },
  { title: "Book 4", author: "Author 4", quantity: 1 },
  { title: "Book 5", author: "Author 5", quantity: 0 },
];

processBooks(books);
