let arr=[1,2,4,5,6,7,8]
// let newArr=[]
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)   
// }
// console.log(newArr)


// second method of solving this using map
let newArr=arr.map((e)=>{
    return arr*2
})

// filter() is a built-in array method that creates a new array with only the elements that pass a condition (return true).
let result=arr.filter((e)=>{
    return (e>7)?true:false
})
console.log(result)

// reduce() is a built-in array method that reduces an entire array down to a single value by applying a function to each element.
let arr2=[2,3,4,5,67,78]
const sum =(a,b)=>{
    return a+b;
}
console.log(arr2.reduce(sum))
// convert obj into array
console.log(Array.from("EMaan"))