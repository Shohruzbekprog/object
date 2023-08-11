function getMultipleValues(n) {
  const obj = { a: 2, b: 3, c: 4, d: 6 };
  const res = {};

  for (let key in obj) {
    res[key] = obj[key] * n;
  }

  return res;
}

const n = 3;
const result = getMultipleValues(n);
console.log(result);
