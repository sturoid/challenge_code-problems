const assert = require('assert');

// Find the longest word in a string and return it.

function findLongestWordInString(string) {
  // Remove numbers, and special characters (non-word) and return them as an array;
  // + sign makes it "greedy" so it returns the entire word match instead of each letter individually.
  const pattern = /[^\d\W]+/g;
  const matchArray = string.match(pattern);
  let longestWord = '';

  for (const word of matchArray) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

assert.equal(
  findLongestWordInString('This is aasdfasdfasdf, rando2320f--2, dasdf;.'),
  'aasdfasdfasdf'
);
