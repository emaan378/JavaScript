// <!-- write a proram to calculate the factorial of a number using rrduce and for loop -->
// First i did this using for loop
// let num=Number(prompt("Enter a number:"))
// let f=1;
// for (let i=1;i<=num;i++) {
//  f*=i  
// }
// console.log(`the fictorial of ${num} is ${f}`)

// // using reduce
// let num = Number(prompt("Enter a number:"))

// let arr = Array.from({length: num}, (_, i) => i + 1)
// // array.form create an array whoes lenght is equal to num and it start from current value jo k nahi chahiya so _ yeah use kya toward the end which is i and then we increment i bcz indx start with 0 and we have to start it with 1

// let f = arr.reduce((acc, curr) => acc * curr, 1)
// // acc contain the updating value and curr containing the current value .it multiply both of them and start acc with 1 and after that the final result is pass to f

// console.log(`the factorial of ${num} is ${f}`)

// Another approch of making it using reduce
let a =Number(prompt("Enter a number"));
function factorial(number){
    let arr = Array.from(Array(number+1).keys())
    let c= arr.slice(1,).reduce((a,b)=> a*b)
    return c
}
alert(factorial(a));