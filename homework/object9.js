function createObjectFromLongNumber(longNumber) {
  const numberString = String(longNumber);
  const numberLength = numberString.length;

  const classes = ['ones', 'thousands', 'millions', 'billions', 'trillions'];

  const result = {};

  classes.forEach((className, index) => {
    const start = Math.max(0, numberLength - (index + 1) * 3);
    const end = numberLength - index * 3;
    const extractedDigits = parseInt(numberString.slice(start, end));

    result[className] = extractedDigits;
  });

  return result;
}

const input = 8945472985629;
const output = createObjectFromLongNumber(input);
console.log(output);

