function nice(name){
    console.log("Hey "+ name + " you are  amazing")
    console.log("Hey "+ name + " you are good")
    console.log("Hey "+ name + " you are  nice")
}
nice("Emaan")
// To avoid repitation we use function.

// Sum function
function sum(a,b,c=3){
    // console.log(a+b)
    return a+b +c;
}
result1 =sum(12,34)
result2 =sum(1,3)
result3=sum(11,15,1)
console.log("The sum of these numbers is",result1)
console.log("The sum of these numbers is",result2)
console.log("The sum of these numbers is",result3)
// If we dont pass the value of the parameter then the JS take it as undefined.and if we add somenumber into undefined the JS return NAN means not a number

// Arrow Function
const arr=(a)=>{
    console.log("I am an arrow Function",a)
}
arr(1)
arr(2)