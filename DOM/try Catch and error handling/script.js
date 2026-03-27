// Error Handling
let a =Number(prompt("Enter the first number")) 
let b=Number(prompt("Enter the second Number")) 
if(isNaN(a)|| isNaN(b)){
    throw SyntaxError("Sorry this is not allow")
}
let sum=(a+b);
// console.log("The sum is",sum)
// handling the error get through javascript library or may be through some  internal function
function main(){
let x=1;
try {
    console.log("The sum is",sum*x)
    return true
} catch (error) {
    console.log("Error agya bhai")
    return false
    // console.log(error.name)
}finally{
    console.log("files are being closed and db connection is being closed")
}}
let c= main()