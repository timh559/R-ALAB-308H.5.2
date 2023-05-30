const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

// Every
function greaterThan0(x) {
    return x>0;
}
console.log("Greater than 0");
console.log(nums.every(greaterThan0));

function shorterThan(str) {
    return str.length < 8;
}
console.log("Shorter than 8");
console.log(panagram.every(shorterThan));

// Filter

// Find

// Find Index

// For each
nums.forEach(element => console.log(element*3));