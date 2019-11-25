/*
Complete the urlencode() function, which should take a javascript object and return a PHP-style query string [1].

The object should be translated into a sequence of <key>=<value> pairs, separated by &.

Reserved characters in keys and values should be percent encoded [2].

If a nested object is encountered it should be added to the output as <top level key>[<sub key]=<value>

There are a number of test-cases defined below, correctness of the function can be tested by running this file:

node urlencode.js

It will loop through the test cases and output whether each is correct.

[1] http://php.net/manual/en/function.http-build-query.php
[2] https://en.wikipedia.org/wiki/Percent-encoding
*/

// Encode string.
const encode = str => encodeURIComponent(str);

// Get current prefix for the query string.
const getPrefix = (path, key) => (path ? `${path}[${encode(key)}]` : `${encode(key)}`);

// Remove character from position in string if it exists.
const removeCharFromString = (string, char, position) => {
  return string.charAt(string.length + position) === char ? string.slice(0, position) : string;
};

// Convert array to string, and if "&" is on the end of the string, remove it
const getStringFromArray = (array, joinWithChar) => {
  return array.join(joinWithChar);
};

function urlencode(input, path = '') {
  const stringArray = [].concat(
    ...Object.entries(input).map(([key, value]) => {
      if (typeof value === 'object') {
        return urlencode(value, getPrefix(path, key));
      } else {
        return !value ? '' : `${getPrefix(path, key)}=${encode(value)}`;
      }
    })
  );
  return removeCharFromString(getStringFromArray(stringArray, '&'), '&', -1);
}

var tests = [
  {
    data: {
      a: 'b',
      c: 'd'
    },
    expected: 'a=b&c=d'
  },
  {
    data: {
      a: 'b',
      c: 'd =e'
    },
    expected: 'a=b&c=d%20%3De'
  },
  {
    data: {
      a: 'b',
      c: {
        d: 'e',
        f: 'g'
      }
    },
    expected: 'a=b&c[d]=e&c[f]=g'
  },
  {
    data: {
      a: 'b',
      c: {
        d: 'e',
        f: {
          'g h': 'i=j',
          k: 'l'
        }
      }
    },
    expected: 'a=b&c[d]=e&c[f][g%20h]=i%3Dj&c[f][k]=l'
  },
  {
    data: {
      a: 'b',
      c: ['d', 'e']
    },
    expected: 'a=b&c[0]=d&c[1]=e'
  },
  {
    data: {
      a: 'b',
      c: ['d', 'e'],
      f: undefined
    },
    expected: 'a=b&c[0]=d&c[1]=e'
  }
];

for (i in tests) {
  var data = tests[i].data;
  var expected = tests[i].expected;

  var result = urlencode(data);

  console.log('Expect: ', expected);
  console.log('Result: ', result);

  console.log(result === expected);
  if (result !== expected) {
    break;
  }
}
