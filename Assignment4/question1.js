const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
//output:AMD 52-week high is 102.21

let highestStockPrice = amdPrices[0];
for (let i = 1; i < amdPrices.length; i++) {
    if (amdPrices[i] > highestStockPrice) {
        highestStockPrice = amdPrices[i];
    }
}
console.log(`AMD 52-week high is ${highestStockPrice}`);