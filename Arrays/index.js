// Array is used to store more than one value.
let arr=[1,2,4,5,6,7]
// console.log(arr)
// console.log(arr.length)
// Arrays are mutable 
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// arr[4]=456
// console.log(arr)
// console.log(typeof  arr)
console.log(arr.toString())
// output:1,2,4,5,6,7
console.log(arr.join( " and " ))
// After that the output is this.    1 and 2 and 4 and 5 and 6 and 7

// pop() is a built-in array method that removes the last element from an array and returns that removed element
arr.pop()
console.log(arr)
// after that the output becomes [ 1, 2, 4, 5, 6 ] bcz pop remove the last value

// Push method is used to add new value in array at the end 
arr.push(100)
arr.push("Emaan")
console.log(arr)
// the output:[ 1, 2, 4, 5, 6, 100, 'Emaan' ]

// shift method remove or delete the first element of the array
arr.shift()
console.log(arr)

// unshift() add value in the beginning of the array
arr.unshift("Fatima")
console.log(arr)

// /delete on an array does not remove the slot — it leaves undefined in its place:
delete arr[2]
console.log(arr)
 let a1=[2,4,6,8,10]
 let a2 =[1,3,5,7,9]
 let a3=['c','b']
 console.log(a1.concat(a2,a3))
 console.log(a3.sort())

//  splice() is a built-in array method that can add, remove, or replace elements at any position in an array.
// syntax  array.splice(startIndex, deleteCount, item1, item2, ...)
a1.splice(0,2,122,111)
console.log(a1)

// slice() in JavaScript
// slice() is a built-in array method that copies a portion of an array and returns it as a new array — without modifying the original..
// array.slice(startIndex, endIndex)
console.log(a2.slice(2,4))

