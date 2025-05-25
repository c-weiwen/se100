const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
//output: The 7-day SMA of AMD is 90.97
let sum = 0;
for (let i = 0; i < amdPrices.length; i++) {
    sum += amdPrices[i];
}
const avgPrice = sum / amdPrices.length;
console.log(`The 7-day SMA of AMD is ${avgPrice.toFixed(2)}`);