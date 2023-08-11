function convertArrayTobj(array) {
  let obj = {};

  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    let length = element.length;

    obj[element] = length;
  }

  return obj;
}

let array = ["Abdulaziz", "Safarmurad", "Orol", "Jahongir"];
let result = convertArrayTobj(array);

console.log(result);
