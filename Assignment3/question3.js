const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};

// Write your code below
//output: -2.57

const result = (Number.parseFloat(disneyData.open) - Number.parseFloat(disneyData.high) + Number.parseFloat(disneyData.low) - Number.parseFloat(disneyData.close)).toFixed(2);
console.log(result);