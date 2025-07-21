const recipes = [];

const recipe1 = {
  name: "Spaghetti Carbonara",
  ingredients: ["spaghetti", "Parmesan cheese", "pancetta", "black pepper"],
  ratings: [4, 5, 4, 5],
  cookingTime: 22,
  totalIngredients: null,
  difficultyLevel: "",
  averageRating: null,
};

const recipe2 = {
  name: "Chicken Curry",
  ingredients: [
    "chicken breast",
    "coconut milk",
    "curry powder",
    "onion",
    "garlic",
  ],
  ratings: [4, 5, 5, 5],
  cookingTime: 42,
  totalIngredients: null,
  difficultyLevel: "",
  averageRating: null,
};

const recipe3 = {
  name: "Vegetable Stir Fry",
  ingredients: ["broccoli", "carrot", "bell pepper"],
  cookingTime: 15,
  totalIngredients: null,
  difficultyLevel: "",
  ratings: [4, 3, 4, 5],
  averageRating: null,
};

const recipe1Name = recipe1.name;
const recipe2Name = recipe2.name;
const recipe3Name = recipe3.name;
const recipe1CookingTime = recipe1.cookingTime;
const recipe2CookingTime = recipe2.cookingTime;
const recipe3CookingTime = recipe2.cookingTime;

console.log(recipe1Name);
console.log(recipe2Name);
console.log(recipe3Name);
console.log(recipe1CookingTime);
console.log(recipe2CookingTime);
console.log(recipe3CookingTime);

recipes.push(recipe1, recipe2, recipe3);

const getAverageRating = (ratings) => {
  const sum = ratings.reduce((acc, rating) => acc + rating, 0);
  return sum / ratings.length;
};

const recipe1AverageRating = getAverageRating(recipe1.ratings);
const recipe2AverageRating = getAverageRating(recipe2.ratings);
const recipe3AverageRating = getAverageRating(recipe3.ratings);
console.log(recipe1AverageRating);
console.log(recipe2AverageRating);
console.log(recipe3AverageRating);
console.log(
  "Ratings for " + recipe1.name + " is ",
  getAverageRating(recipe1.ratings)
);
console.log(
  "Ratings for " + recipe2.name + " is ",
  getAverageRating(recipe2.ratings)
);
console.log(
  "Ratings for " + recipe3.name + " is ",
  getAverageRating(recipe3.ratings)
);

const getTotalIngredients = (ingredients) => {
  return ingredients.length;
};

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
const recipe2TotalIngredients = getTotalIngredients(recipe2.ingredients);
const recipe3TotalIngredients = getTotalIngredients(recipe3.ingredients);
console.log(recipe1TotalIngredients);
console.log(recipe2TotalIngredients);
console.log(recipe3TotalIngredients);
console.log(
  "Ingredients for " +
    recipe1.name +
    " has " +
    getTotalIngredients(recipe1.ingredients)
);
console.log(
  "Ingredients for " +
    recipe2.name +
    " has " +
    getTotalIngredients(recipe2.ingredients)
);
console.log(
  "Ingredients for " +
    recipe3.name +
    " has " +
    getTotalIngredients(recipe3.ingredients)
);

const getDifficultyLevel = (cookingTime) => {
  if (cookingTime <= 30) {
    return "easy";
  } else if (cookingTime <= 60) {
    return "medium";
  } else {
    return "hard";
  }
};

const recipe1DifficultyLevel = getDifficultyLevel(recipe1.cookingTime);
const recipe2DifficultyLevel = getDifficultyLevel(recipe2.cookingTime);
const recipe3DifficultyLevel = getDifficultyLevel(recipe3.cookingTime);
console.log(recipe1DifficultyLevel);
console.log(recipe2DifficultyLevel);
console.log(recipe3DifficultyLevel);
console.log(
  "Difficulty level for " + recipe1.name + " is ",
  getDifficultyLevel(recipe1.cookingTime)
);
console.log(
  "Difficulty level for " + recipe2.name + " is ",
  getDifficultyLevel(recipe2.cookingTime)
);
console.log(
  "Difficulty level for " + recipe3.name + " is ",
  getDifficultyLevel(recipe3.cookingTime)
);

recipe1.averageRating = recipe1AverageRating;
recipe1.totalIngredients = recipe1TotalIngredients;
recipe1.difficultyLevel = recipe1DifficultyLevel;

recipe2.averageRating = recipe2AverageRating;
recipe2.totalIngredients = recipe2TotalIngredients;
recipe2.difficultyLevel = recipe2DifficultyLevel;

recipe3.averageRating = recipe3AverageRating;
recipe3.totalIngredients = recipe3TotalIngredients;
recipe3.difficultyLevel = recipe3DifficultyLevel;

console.log(recipes);
