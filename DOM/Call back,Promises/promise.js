// console.log("This is Promises")
// let prom1 = new Promise((resolve, reject) => {
//     let a = Math.random();
//     if (a < 0.5) {
//         reject("No random number was not supporting you")
//     }
//     else {
//         setTimeout(() => {
//             console.log("Yes I am done")
//             resolve("Emaan")
//         }, 3000);
//     }

// })
// prom1.then((a) => {
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })
// we can use multiple .then statements and each of them work independently
// let prom1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Emaan")
//   }, 3000)
// })

// prom1
//   .then((name) => {
//     console.log("Step 1 - Name received:", name)  // "Emaan"
//     return name.toUpperCase()                      // pass to next .then
//   })
//   .then((upperName) => {
//     console.log("Step 2 - Uppercased:", upperName) // "EMAAN"
//     return upperName + " is a developer"           // pass to next .then
//   })
//   .then((sentence) => {
//     console.log("Step 3 - Full sentence:", sentence) // "EMAAN is a developer"
//     return sentence.length                           // pass to next .then
//   })
//   .then((length) => {
//     console.log("Step 4 - Length:", length)          // 20
//   })
//   .catch((error) => {
//     console.log("Something went wrong:", error)      // handles any error
//   })

//   Promise Api methods
// Promise.all wait for all promises to resolve and return the array of their results .if any one fail it gives error and other results are ignored

//   Most imp things :
// it's just a parameter(like error in above promise) of the next .then callback. It automatically receives whatever was returned from the previous .then.

// without.then the promist will be resolved but output is lost .the output is received only when .then is used


// use of promise.all

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 1 time")
            resolve("Emaan")
        }, 2000);
    }

})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2 time")
            resolve("Emaan 2")
        }, 1000);
    }

})
// let p3= Promise.all([prom1,prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>console.log(err))
// allSettled

// let p3= Promise.allSettled([prom1,prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>console.log(err))


// promise.race
// It runs all promises simultaneously but returns the result of whichever finishes FIRST — winner takes all
let p3= Promise.race([prom1,prom2])
p3.then((a)=>{
    console.log(a)
}).catch((err)=>console.log(err))




// setttle means yeah tu resolve ho gya ya reject promise bager error k
// Differnece btw resolve and settle
// A promise is resolved when it completed successfully with a value.
// A promise is settled when it is either resolved OR rejected — meaning it is no longer pending.

// promise.allsettle() ---wait for all promises to settle and returns their results an an array of object with status and value