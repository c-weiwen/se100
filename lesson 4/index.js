
//             Index Numbers:    0      1      2      3      4
const stockDailyClosePrices = [75.62, 74.14, 78.52, 80.21, 79.66];

let total = 0
for(let i = 0; i<stockDailyClosePrices.length; i++) {
    console.log(`i: ${i},  element ${stockDailyClosePrices[i]}`);
    total += stockDailyClosePrices[i];
}   
console.log(`Total: ${total}`);

//Exercise 1: Finding sum of numbers in an array (3 mins)
const AMSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];

// Write your code below

let totalMSFT = 0
for(let i = 0; i<AMSFTStockClosingPrices.length; i++) {
    totalMSFT += AMSFTStockClosingPrices[i];
}   
console.log(`The total sum of closing prices of MSFT is : ${totalMSFT}`);

//End of Exercise 1

//2D Array
const myArray = [
    [1,2,3], //i = 0
    [4,5,6], //i = 1
    [7,8] //i = 2
]
console.log(myArray[1]);
console.log(myArray[1][2]); // 6

for (let i = 0; i < myArray.length; i++) {
    const nestedArray = myArray[i];
        console.log(nestedArray);

        for(let nestedArrayIndex = 0; nestedArrayIndex < nestedArray.length; nestedArrayIndex++) {
            console.log(nestedArray[nestedArrayIndex]);
        }
    }

    //2.3.4
    const aaplDailyOHLC = [
	{
		Open: 75.62,
		High: 74.14,
		Low: 78.52,
		Close: 80.21
	},
	{
		Open: 80.21,
		High: 81.21,
		Low: 79.89,
		Close: 80.78
	}
];

for (let i = 0; i < aaplDailyOHLC.length; i++) {
    const currentObject = aaplDailyOHLC[i];
  //  console.log(currentObject);

   // console.log(`High: ${currentObject.High}`);

    const allKeys = Object.keys(currentObject);
    console.log(allKeys);
    for (let keyIndex = 0; keyIndex < allKeys.length; keyIndex++) {
        const currentKey = allKeys[keyIndex];
        console.log ('current key is ', currentKey);
       console.log(currentObject[currentKey])
    }   
}

//Exercise 2: Finding the sum of numbers in a nested collection (6 mins)
const MSFTStockClosingPrices = [
{
	Monday: 254.12,
	Tuesday: 253.12,
	Wednesday: 256.97,
	Thursday: 257.52,
	Friday: 258.93
},
{
	Monday: 292.20,
	Tuesday: 289.73,
	Wednesday: 291.04,
	Thursday: 294.55,
	Friday: 296.29
}
]

// Write your code below
let sumOfStockDailyClosePrice = 0;
for (let i = 0; i < MSFTStockClosingPrices.length; i++) {
    const weeklyPrices = MSFTStockClosingPrices[i];
    // each value here is a float
    // our POV: 292.20
    // compiler POV: 289.730000000342
    total += weeklyPrices["Monday"].toFixed(2);
    total += weeklyPrices["Tuesday"].toFixed(2);
    total += weeklyPrices["Wednesday"].toFixed(2);
    total += weeklyPrices["Thursday"].toFixed(2);
    total += weeklyPrices["Friday"].toFixed(2);
    
}   
//console.log(`The total sum of closing prices of MSFT is : ${weeklyPrices}`);
//End of Exercise 2

//Exercise 3: Finding the sum of numbers in a nested collection (6 mins)
const cClosingPrices = [
{
	Monday: 254.12,
	Tuesday: 253.12,
	Wednesday: 256.97,
	Thursday: 257.52,
	Friday: 258.93
},
{
	Monday: 292.20,
	Tuesday: 289.73,
	Wednesday: 291.04,
	Thursday: 294.55,
	Friday: 296.29
}]

// Write your code below
let cTotal = 0

for (let weeklyPrices of cClosingPrices) {
    for (let day in weeklyPrices) {
        cTotal += weeklyPrices[day]; //weekPrices["Monday"]
    }
}   
console.log('The total is ', cTotal.toFixed(2))

//End of Exercise 3

let i = 0
while (i < 5 ) {
    // do something
    // break; 


    i += 1
}

//Exercise 4: Finding the sum of numbers in a nested collection (6 mins)
const dClosingPrices = [
{
	Monday: 254.12,
	Tuesday: 253.12,
	Wednesday: 256.97,
	Thursday: 257.52,
	Friday: 258.93
},
{
	Monday: 292.20,
	Tuesday: 289.73,
	Wednesday: 291.04,
	Thursday: 294.55,
	Friday: 296.29
}]

// Write your code below

let dTotal = 0
while (i < dClosingPrices.length) {
    const dWeeklyPrices = dClosingPrices[i];   
    for (let day in dWeeklyPrices) {
        dTotal += dWeeklyPrices[day];
    }
    i += 1
   }
 console.log('the dTotal is ', dTotal.toFixed(2))
//End of Exercise 4

//Exercise 5: Introduction to Functions (3 mins)
// Write your code below
function getBetween() {
	const eStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
	
    let count = 0;
	for (let i = 0; i < eStockClosingPrices.length; i++) {
        const currentElement = eStockClosingPrices[i];
        
        if (currentElement >= 254 && currentElement <= 257) {
            count += 1

        }
    }
    console.log("Number of closing prices between 254 and 257 is ", count)
}
getBetween();
//End of Exercise 5




//Exercise 6: Functions with Parameters (6 mins)



// Write your code below
function fBetween(ticker, eStockClosingPrices) {
	
    let count = 0;
	for (let i = 0; i < eStockClosingPrices.length; i++) {
        const currentPrices = eSFTStockClosingPrices[i];
        
        if (currentPrices >= 254 && currentPrices <= 257) {
            count += 1

        }
    }
    console.log(`Closing price of ${ticker} between 254 and 257: ${count}`);
}

const eSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
const AAPLStockClosingPrices = [256.45, 255.25, 259.10, 260.75, 261.88];

fBetween('MSFT', eSFTStockClosingPrices);
fBetween('AAPL', AAPLStockClosingPrices);
//End of Exercise 6



function formatName (companyName, companyHeader) {
    return companyName + " " + companyHeader;
}

const displayMessage = formatName ("Apple", "hello world")
console.log (displayMessage);

formatName ("Apple", "loreum ipsum")


//Exercise 7: Creating a function (4 mins) - Sorting an array
// Write your code below
const StockDailyPerformance = [3.1, 2.4, 1.1, 2.8, 4.5, 2.7]

function sortPerformanceInAscOrder (dailyPerformanceArray) {
    return dailyPerformanceArray.sort();
}


// Do not modify this code:
console.log(sortPerformanceInAscOrder(StockDailyPerformance));

//Expected Output > [1.1, 2.4, 2.7, 2.8, 3.1, 4.5]




//Exercise 8: Creating an arrow function (2 mins)
// Write your code below
const sortPerformanceInAscOrder = (dailyPerformanceArray) => {
    dailyPerformanceArray.sort();
}
console.log(sortPerformanceInAscOrder(dailyPerformanceArray));

//Expected Output > [1.1, 2.4, 2.7, 2.8, 3.1, 4.5]