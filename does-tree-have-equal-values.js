const assert = require('assert');

// iFit - Final
// Check to see if all values in the tree are equal or not.
// @return true/false

function isEqual(tree) {
  const values = [];
  return isEqualHelper(tree, values);
}

function isEqualHelper(tree, values) {
  for (const [key, value] of Object.entries(tree)) {
    typeof value === 'object' ? isEqualHelper(value, values) : values.push(value);
  }

  return values.every(v => v === values[0]);
}

const sampleTree = {
  a: 1,
  b: 1,
  c: {
    d: 1,
    e: 1
  },
  f: 1,
  g: {
    h: {
      i: 1,
      j: 2
    }
  }
};

assert.deepEqual(isEqual({ a: 1, b: 1 }), true);
assert.deepEqual(isEqual({ a: 1, b: 1, c: { d: { e: 1 } } }), true);
assert.deepEqual(isEqual({ a: 1, b: 1, c: { d: { e: 1, f: 2 } } }), false);
assert.deepEqual(isEqual(sampleTree), false);
assert.deepEqual(isEqual({ a: 1, b: 2 }), false);
console.log('All tests passed!');
