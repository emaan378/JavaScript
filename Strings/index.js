// string is used to manipulate and store text
// This is on string in Js

let name="Emaan"
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name.length);
// Template Literal
let f1="Rohan";
let f2="Shubhm";
console.log("My first friend name is " + f1 + " and My second friend name is "+ f2);
console.log(`My first friend name is ${f1} and second friend name is ${f2}`)
// Escape Sequance
console.log("Hello\nWelcome in Programming world")
console.log("whats going \t hmmm?")
console.log("i hope so you \"enjoy\" your sweet life")

let real_name="Fatima";
console.log(real_name.toUpperCase())
// toupperCase is a method here
console.log(real_name.toLowerCase())
// String slicing
console.log(real_name.slice(0,3))
console.log(real_name.slice(0))
// Modifing String
console.log(real_name.replace("F","A"))
// String Concatination
console.log(name.concat(real_name))
// Strings are immutable
console.log(real_name.charAt(0))
