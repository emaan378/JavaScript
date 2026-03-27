// Problem: Student Result System
// Create a function checkResult that takes a student name and marks as arguments and returns a Promise that:

// ✅ Resolves if marks are ≥ 50 → after 2000ms with message "[name] has passed with [marks] marks"
// ❌ Rejects if marks are < 50 → after 1000ms with message "[name] has failed with [marks] marks"


// Then:

// Use .then to print the success message
// Use .catch to print the failure message


// Expected Output:
// // if marks = 75
// "Emaan has passed with 75 marks"

// // if marks = 30
// "Emaan has failed with 30 marks"
let name=prompt("Enter your name")
let marks=prompt("Enter your marks to check the result")
let checkResult=((sName,sMarks)=>{
    return new Promise((resolve,reject)=>{
    if (marks>=50){
    setTimeout(() => {
        resolve(`${name} has passed with ${marks}marks`)
        
    }, 2000);
    }
    else if(marks<50){
        setTimeout(() => {
            reject(`${name} has failed with ${marks} marks`)
            
        }, 1000);
    }

    })

})
checkResult(name,marks).then((result)=>{
    console.log(result)
}).catch((err)=>{
    console.log(err)

})

