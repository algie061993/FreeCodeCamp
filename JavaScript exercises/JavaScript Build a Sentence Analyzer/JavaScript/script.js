const getVowelCount = (sentence) => {
  let count = 0;
  for (let vowel of sentence) {
    if ("aeiouAEIOU".includes(vowel)) {
      count++;
      //uncomment this if you man to see the vowels
      //console.log(vowel);
    }
  }
  return count;
};

const vowelCount = getVowelCount("Apples are tasty fruits");
console.log("Vowel Count: " + vowelCount);

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

const consonantCount = getConsonantCount("Coding is fun");
console.log("Consonant Count: " + consonantCount);

const getPunctuationCount = (sentence) => {
  let count = 0;
  for (let char of sentence) {
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
