function fetchData(): Promise() {
    // Write your code here
     const fetchDataPromise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Data retrieved")
        }, 1000);
    })
    return fetchDataPromise;
}

function processData(data) {
    // Write your code here

    const processedData = data + " and processed"

    const processDataPromise = new Promise((resolve, reject)=>{
         setTimeout(() => {
           resolve(processedData)
         }, 2000);
    })
    return processDataPromise;
}

function displayData(data: string) {
    // Write your code here
    console.log(data)
}

// Chaining the functions
fetchData()
    .then((rawData) => processData(rawData))
    .then((processedData) => displayData(processedData));