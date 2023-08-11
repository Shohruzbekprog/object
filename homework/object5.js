const products = {"Orange": 10000, "Apple": 12000, "Tangerine": 8000, "Banana": 20000};

const totalCost = Object.values(products).reduce((fruit, currentValue) => fruit + currentValue);

console.log(totalCost);
