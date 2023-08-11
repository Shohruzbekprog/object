function defineObject(obj) {
  let keys = Object.keys(obj);
  
  for (let i = 0; i < keys.length; i++) {
    if (typeof keys[i] === `string`) {
      return true;
    }
  }
  return false;
}
let input = {abc: 1, 123: 2, d: 5};
let output = defineObject(input);

console.log(output);  
