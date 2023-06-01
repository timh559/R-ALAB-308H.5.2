const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

// Every
function greaterThan0(x) {
  return x > 0;
}
console.log("Greater than 0");
console.log(nums.every(greaterThan0));

function shorterThan(str) {
  return str.length < 8;
}
console.log("Shorter than 8");
console.log(panagram.every(shorterThan));

// Filter
console.log("Filtering nums less than 4");
console.log(nums.filter((num) => num < 4));

console.log("Filtering even length words");
console.log(panagram.filter((word) => word.length % 2 == 0));

// Find
console.log("Finding first num divisible by 5");
console.log(nums.find((num) => num % 5 == 0));

console.log("Finding first word longer than 5");
console.log(panagram.find((word) => word.length > 5));

// Find Index
console.log("Finding index of first num divisible by 3");
console.log(nums.findIndex((num) => num % 3 == 0));

console.log("Finding index of first word longer than 5");
console.log(panagram.findIndex((word) => word.length > 5));

// For each
console.log("Multiplying each num by 3");
nums.forEach((element) => console.log(element * 3));

console.log("Adding exclamation point to each word");
panagram.forEach((word) => console.log(word + "!"));

// Map
console.log("Mapping each num * 100 to a new array");
const newNums = nums.map((num) => num * 100);
console.log(newNums);

console.log("Mapping each word in uppercase to a new array");
const newWords = panagram.map((word) => word.toUpperCase());
console.log(newWords);

// Some
console.log("Checking if any number is divisible by 7");
console.log(nums.some((num) => num % 7 === 0));

console.log("Checking if any word contains an 'a'");
console.log(panagram.some((word) => word.includes("a")));

//Reduce
const sumOfNums = nums.reduce((sum, num) => sum + num, 0);
console.log("Sum of all nums in array");
console.log(sumOfNums);

const sumOfWords = panagram.reduce((sum, word) => sum + word, "");
console.log("Concatenating all words in array");
console.log(sumOfWords);

// Sort
const sortedNumsAsc = nums.sort((a, b) => (a > b ? 1 : -1));
console.log("Sorting nums in ascending order");
console.log(sortedNumsAsc);
const sortedNumsDesc = nums.sort((a, b) => (a > b ? -1 : 1));
console.log("Sorting nums in descending order");
console.log(sortedNumsDesc);
const sortedWordsAsc = panagram.sort((a, b) => (a.toUpperCase() > b.toUpperCase() ? 1 : -1));
console.log("Sorting words in ascending order");
console.log(sortedWordsAsc);
const sortedWordsDesc = panagram.sort((a, b) => (a.toUpperCase() > b.toUpperCase() ? -1 : 1));
console.log("Sorting words in descending order");
console.log(sortedWordsDesc);

// Panagram
const isPanagram = function (arr) {
  let strArr = arr.join("").toUpperCase();
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  for (const letter of alphabet) {
    if (strArr.indexOf(letter) < 0) {
      return false;
    }
  }
  return true;
};
console.log("Is it a panagram?");
console.log(isPanagram(panagram));

const products = [
  {
    name: "allen wrench",
    price: 2.99,
    description: "handy tool",
  },
  {
    name: "cornucopia",
    price: 5.99,
    description: "festive holiday decoration",
  },
  {
    name: "banana",
    price: 0.99,
    description: "full of potassium",
  },
  {
    name: "guillotine (cigar)",
    price: 10.59,
    description: "behead your stub",
  },
  {
    name: "jack-o-lantern",
    price: 3.99,
    description: "spooky seasonal fun",
  },
  {
    name: "doggie treat (box)",
    price: 5.99,
    description: "fido loves 'em",
  },
  {
    name: "egg separator",
    price: 3.99,
    description: "it separates yolks from whites",
  },
  {
    name: "LED lightbulb",
    price: 6.55,
    description: "It's super-efficient!",
  },
  {
    name: "owl pellets",
    price: 3.99,
    description: "Don't ask what they used to be.",
  },
  {
    name: "flag",
    price: 5.99,
    description: "catches the breeze",
  },
  {
    name: "hair brush",
    price: 6.99,
    description: "fine boar bristles",
  },
  {
    name: "iridium (one gram)",
    price: 19.36,
    description: "corrosion-resistant metal",
  },
  {
    name: "quark",
    price: 0.01,
    description: "Very small",
  },
  {
    name: "turtleneck",
    price: 19.99,
    description: "available in black and slightly-darker black",
  },
  {
    name: "kaleidoscope",
    price: 8.25,
    description: "tube with moving plastic pieces inside",
  },
  {
    name: "mitt (leather)",
    price: 15,
    description: "regulation sized",
  },
  {
    name: "nothing",
    price: 10,
    description: "Hey, if you pay us, we won't ask any questions.",
  },
  {
    name: "violin",
    price: 2000,
    description: "Talk about a JS fiddle...",
  },
  {
    name: "yoyo",
    price: 1,
    description: "We had to pull some strings to get this one in.",
  },
  {
    name: "pincushion",
    price: 1.99,
    description: "You'll get 'stuck' on it",
  },
];
// Filtering Objects
const filteredPrice = products.filter(product => product.price < 10);
console.log("Filtering Products for prices less than 10");
console.log(filteredPrice);
// Sorting Objects
const sortedProductNames = products.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1);
console.log("Product names in alphabetical order");
console.log(sortedProductNames);