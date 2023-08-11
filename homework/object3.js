function createSquareObject(n) {
  let squareObject = {};
  let squareObject2 = {};

  for (let i = 1; i <= n; i++) {
    squareObject[i] = i * i,
    squareObject2[i] = i + n
  }

  return squareObject;
}

console.log(createSquareObject(5));
