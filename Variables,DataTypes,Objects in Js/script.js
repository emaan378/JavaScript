console.log("Variables");
let a = 34;
var b= 90;
var name ="Emaan";
// console.log(a + b + name)
// console.log(typeof a ,typeof b ,typeof name);
{
    let a =90;
    console.log(a);
}
console.log(a)
{
    var b=56;
    console.log(b);
}
console.log(b)

let x="Emaan";
let y=34;
let z=34.67;
const w=true;
let q= undefined;
let r= null;
console.log(x,y,z,w ,q,r)
console.log(typeof x,typeof y,typeof z,typeof w ,typeof q,typeof r)

let obj ={
    name:"Emaan",
    "job Code":5600,
    is_handsome:true,
}
console.log(obj)
obj.salary="100 Crores";
console.log(obj)
obj.salary="500 Crores";
console.log(obj);






// In both of the cases the same b value shown which is now 56. bcz the var is golbaly scope after changing its value it shown the same value in both of the cases
// so we try to use let so our block variable becomes different from global variable



// const a=34;
// a = a+5; Not allowed because a is constant
// In Js the variable must start with underscore or alphabet  or $ but the variable name is not begin with number.

// Var vs let in js
// Var is golbaly scoped while let and const are block scoped.
// const is used when we want the value of a variable is not change .


// Ecmascript is a standard on which Javascript is based.It was created to ensure that the different documents of js are talking about same language


// Primitive data type or objects
// primitive data type are the basic data type in Js that are the building block of others data type
// there are 7 primitive data type in js
// null,Number,String,Bollean,Symbol,undefined,Bigint,undefined


// why the null datatype is shown object
// yeah ak misake bhi kahi ja saktti h  but the thing is k yeah boht purana code h or ab boht sari cheezan is pr depend krti hn so ab hm is ko change bhi nahi kr sakta.
// This is a historical bug in JavaScript that has never been fixed to preserve backward compatibility.

// objects in Js
// are the Key,value pair in JS

// quiz
// write a Javascript program to store the name,phone number ,marks of a student using objects
let std1 ={
    stdname :"Hadia",
    contactno :"032345678",
    marks:45,
}
console.log(std1)