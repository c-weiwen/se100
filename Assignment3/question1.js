const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];

// Write your code below
//output: 193.204

let sum = 0;
for (let i = 0; i < msftData.length; i++) {
	sum += msftData[i];
}
const avg = sum / msftData.length;
console.log(avg);