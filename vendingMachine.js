let coins = [500, 200, 100, 50, 20, 10]

function vendingMachine(products, currency, selectedProduct) {
  if (selectedProduct < 1 || selectedProduct > products.length) {
    return "Enter a valid product number";
  }
  let priceOfProduct = products[selectedProduct - 1].price;
  if (currency < priceOfProduct) {
    return "Not enough money for this product";
  }
  let rawChange = currency - priceOfProduct;
  let c1 = [];
  while (rawChange > 0) {
    for (let i = 0; i < coins.length; i++) {
      if (rawChange >= coins[i]) {
        rawChange = rawChange - coins[i];
        c1.push(coins[i]);
        break;
      }
    }
  }
  return `{ product: ${products[selectedProduct - 1].ProductName}, change: ${JSON.stringify(c1)}}`;
}


let stock = [
  { ProductName: 'Snickers', price: 150 },
  { ProductName: 'Kit Kat', price: 70 },
  { ProductName: 'Reeses', price: 80 },
  { ProductName: 'Water', price: 200 },
  { ProductName: 'Pepsi', price: 100 },
  { ProductName: 'Coke', price: 130 },
  { ProductName: 'Crackers', price: 120 }
];

console.log(vendingMachine(stock, 200, 7));
console.log(vendingMachine(stock, 500, 0));
console.log(vendingMachine(stock, 90, 1));