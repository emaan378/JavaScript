let array=[1,2,4,5,6,7,89,90]
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
// }
// array.forEach((value,index,array) => {
//     console.log(value,index,array)
// });
// let obj={
//     a:1,
//     b:2,
//     c:3,
// }

// for (const key in obj) {
//     if (!Object.hasOwn(obj, key)) continue;
    
//     const element = obj[key];
//     // console.log(element)
//     console.log(key,element)
    
// }
for (const element of array) {
    console.log(element)
}