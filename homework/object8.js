function countOccurrences(arr) {
  let result = {};
  
  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i]]) {
      result[arr[i]] += 1;
    } else {
      result[arr[i]] = 1;
    }
  }
  
  return result;
}

const input = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
const output = countOccurrences(input);
console.log(output);
