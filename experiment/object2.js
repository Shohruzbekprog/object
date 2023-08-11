function createSquareObject (n) {
  let squareObject = {}

  for (let i = 1; i <= n; i++) {
    squareObject [i] = i * i;
  }
 return squareObject;
  
}

console.log(createSquareObject(5));