const assert = require('assert');

// Find the longest word in a string and return it.

// Using reduce.
function findLongestWordInString(string) {
  if (!string || string === '') return '';

  // Remove numbers, and special characters (non-word) and return them as an array;
  // + sign makes it "greedy" so it returns the entire word match instead of each letter individually.
  // [a-zA-Z]+ does the same thing
  const pattern = /[^\d\W]+/g;
  const matchArray = string.match(pattern);

  return matchArray.reduce((a, b) => (a.length > b.length ? a : b));
}

assert.equal(
  findLongestWordInString('This is aasdfasdfasdf, rando2320f--2, dasdf;.'),
  'aasdfasdfasdf'
);
assert.equal(findLongestWordInString(''), '');
console.log('All tests passed!');
