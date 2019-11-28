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

console.log(centuryFromYear(1905));
