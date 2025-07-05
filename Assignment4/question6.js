// Modify the code below:
//output: The three lowest prices are 79.82, 87.12, and 88.15
const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

// Find the three lowest prices
let lowest = [Number.MAX_VALUE, Number.MAX_VALUE, Number.MAX_VALUE];

for (let price of amdPrices) {
    if (price < lowest[0]) {
        lowest = [price, lowest[0], lowest[1]];
    } else if (price < lowest[1]) {
        lowest = [lowest[0], price, lowest[1]];
    } else if (price < lowest[2]) {
        lowest[2] = price;
    }
}

console.log(`The three lowest prices are ${lowest[0]}, ${lowest[1]}, and ${lowest[2]}`);
