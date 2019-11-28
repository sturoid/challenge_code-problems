const assert = require('assert');

// Given a year, return the century it is in. The first century spans from the
// year 1 up to and including the year 100, the second - from the year 101 up to
// and including the year 200, etc.

function centuryFromYear(year) {
  let century = 1;
  const yearArray = String(year).split('');

  if (year > 100 && year <= 999) {
    const firstDigit = yearArray.splice(0, 1).join('');
    const lastTwoDigits = yearArray.splice(-2).join('');
    century = lastTwoDigits === '00' ? Number(firstDigit) : Number(firstDigit) + 1;
  } else if (year > 999) {
    // If last two digits are 00 return first two digits, else return first two digits + 1.
    const firstTwoDigits = yearArray.splice(0, 2).join('');
    const lastTwoDigits = yearArray.splice(-2).join('');
    century = lastTwoDigits === '00' ? Number(firstTwoDigits) : Number(firstTwoDigits) + 1;
  }

  return Number(century);
}

assert.equal(centuryFromYear(1), 1);
assert.equal(centuryFromYear(100), 1);
assert.equal(centuryFromYear(101), 2);
assert.equal(centuryFromYear(999), 10);
assert.equal(centuryFromYear(1900), 19);
assert.equal(centuryFromYear(1901), 20);
console.log('All tests passed!');
