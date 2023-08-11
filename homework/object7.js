function removeFalsyValues(obj) {
  let newObj = {};
  const keys = Object.keys(obj);
  
  for (let key of keys) {
    const value = obj[key];
    
    if (value) {
      newObj[key] = value;
    }
  }
  
  return newObj;
}

const input = { a: false, b: 12, c: true, d: 0 };
const output = removeFalsyValues(input);
console.log(output);
