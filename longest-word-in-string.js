const assert = require('assert');

// Find the longest word in a string and return it.

// Using reduce.
function findLongestWordInString(string) {
  // Remove numbers, and special characters (non-word) and return them as an array;
  // + sign makes it "greedy" so it returns the entire word match instead of each letter individually.
  const pattern = /[^\d\W]+/g;
  const matchArray = string.match(pattern);

  return matchArray && matchArray.length
    ? matchArray.reduce((a, b) => (a.length > b.length ? a : b))
    : '';
}

assert.equal(
  findLongestWordInString('This is aasdfasdfasdf, rando2320f--2, dasdf;.'),
  'aasdfasdfasdf'
);
console.log('All tests passed!');

// Using older style way with for loop.
function findLongestWordInStringAlt(string) {
  // Remove numbers, and special characters (non-word) and return them as an array;
  // + sign makes it "greedy" so it returns the entire word match instead of each letter individually.
  const pattern = /[^\d\W]+/g;
  const matchArray = string.match(pattern);
  const longestWord = '';

  for (const word of matchArray) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}
