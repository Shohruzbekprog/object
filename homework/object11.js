const products = [
  { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
  { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
  { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
  { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
  { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
];

let totalAmount = 0;

for (let i = 0; i < products.length; i++) {
  const product = products[i];
  const discountedPrice = product.price - (product.price * product.discount / 100);
  const subtotal = discountedPrice * product.quantity;
  totalAmount += subtotal;
}

console.log("Umumiy summa:", totalAmount);
