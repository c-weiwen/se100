const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
//output:Average closing price of MSFT is 193.92

let totalClose = 0;
for (let i = 0; i < msftData.length; i++) {
	totalClose += msftData[i][3];
}
const avgClose = totalClose / msftData.length;
console.log(`Average closing price of MSFT is ${avgClose.toFixed(2)}`);