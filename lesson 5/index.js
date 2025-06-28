//promises represent the eventual completion (or failure) of 
// an asynchronous operation and its resulting value.
 
//user the new () constructor to create a promise
//constructor accapts 1 parameter which is a executor function

const myPromise = new Promise((resolve, reject)=>{
    // our asynchronous tasks
    
    setTimeout(() => {
        resolve("Promise resolve!")
    }, 2000);
    //fetch some data from another server
    //const someValueThatWeWantToReturn = 12345
    
    //done
   // resolve(someValueThatWeWantToReturn);

    //perhaps there is an error
    //reject("some particular error message");
})

console.log("start...");

// .then() accepts 1 parameter 
// function that processes the returned value
myPromise.then((resolvedValue) => {
    console.log("result: ", resolveValue);
}
    )
console.log("some other tasks...")



//Exercise 1: Promise
function getNumberPromise() {
    const myPromise = new Promise((resolve, reject)=>{
        setTimeout(() => {
        resolve("10")
    }, 2000);
} 
return myPromise;
}   

// Test the function
getNumberPromise().then((value) => {
    console.log(value); // Should log 10 after 2 seconds
});