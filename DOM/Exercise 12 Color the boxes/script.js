

console.log("Script.js initiallizing")
let boxes= document.getElementsByClassName("box")
// let boxes=document.querySelector(".conatiner").Children
function getRandomColor(){
    // actually the formula is a+r(b-a) where r is the number btw 0  and 1 and .ceil convert the decimal digit into integer
 let val1=Math.ceil(0+Math.random()*255)
 let val2=Math.ceil(0+Math.random()*255)
 let val3=Math.ceil(0+Math.random()*255)
 return `rgb(${val1},${val2},${val3})`
}
console.log(boxes)
Array.from(boxes).forEach((e)=>{
    e.style.backgroundColor=getRandomColor()
    e.style.color=getRandomColor()
})