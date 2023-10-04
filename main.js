function findTopProduct(products) {
  if (products.length === 0) {
    return "No Data";
  } else {
    let maxProfit = -Infinity;
    let topProduct = "";

    for (const product of products) {
      const profit = Object.values(product)[0];
      if (profit > maxProfit) {
        maxProfit = profit;
        topProduct = Object.keys(product)[0];
      }
    }

    return topProduct;
  }
}

function findBottomProduct(products) {
  if (products.length === 0) {
    return "No Data";
  } else {
    let minProfit = Infinity;
    let bottomProduct = "";

    for (const product of products) {
      const profit = Object.values(product)[0];
      if (profit < minProfit) {
        minProfit = profit;
        bottomProduct = Object.keys(product)[0];
      }
    }

    return bottomProduct;
  }
}

function findZeroProfitProduct(products) {
  if (products.length === 0) {
    return "No Data";
  } else {
    let closestProduct = "";
    let closestProfit = Infinity;

    for (const product of products) {
      const profit = Object.values(product)[0];
      const productName = Object.keys(product)[0];

      if (
        Math.abs(profit) < Math.abs(closestProfit) ||
        (Math.abs(profit) === Math.abs(closestProfit) && profit > closestProfit)
      ) {
        closestProfit = profit;
        closestProduct = productName;
      }
    }

    return closestProduct;
  }
}

const productData = [
  { "Product A": -75 },
  { "Product B": -70 },
  { "Product C": 98 },
  { "Product D": 5 },
  { "Product E": -88 },
  { "Product F": 29 },
];

console.log(findTopProduct(productData)); // Output: "Product C"
console.log(findBottomProduct(productData)); // Output: "Product E"
console.log(findZeroProfitProduct(productData)); // Output: "Product D"
