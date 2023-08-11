const obj = {
  "dog": 20,
  "cat": 10,
  "cow": 200,
  "chicken": 2
};

const result = Object.keys(obj).reduce((acc, key) => {
  acc.push(key);
  acc.push(obj[key]);
  return acc;
}, []);

console.log(result);
